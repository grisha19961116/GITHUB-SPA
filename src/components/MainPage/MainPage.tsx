import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import s from './MainPage.module.css';
import Pagination from './PaginationBar/PaginationBar';
import SearchForm from './SearchForm/SearchForm';
import ListRepo from './ListRepo/ListRepo';
import SortBar from './SortBar/SortBar';
import { asyncOperationGetRepositories } from '../../redux/repositories/operations';
import { getRepositoriesMemo } from '../../redux/repositories/selectors';

const MainPage = () => {
  const dispatch = useDispatch();
  const { repositoriesHome } = useSelector(getRepositoriesMemo);

  const handleSubmit = async (githubName: string, repositoryName: string) => {
    dispatch(await asyncOperationGetRepositories(githubName, repositoryName));
  };

  const [activePage, setActivePage] = useState<number>(1);

  useEffect(() => {
    const page = localStorage.getItem('page');
    if (page) setActivePage(Number(page));
  }, []);

  const handlePageChange = (page: string) => {
    localStorage.setItem('page', page);
    setActivePage(Number(page));
  };

  return (
    <div className={s.mainPageWrapper}>
      <SearchForm handleSubmit={handleSubmit} />
      <SortBar />
      <ListRepo page={activePage} repositories={repositoriesHome} />
      {repositoriesHome && repositoriesHome.length >= 5 && (
        <Pagination
          page={activePage}
          total={
            repositoriesHome.length % 5 === 0
              ? repositoriesHome.length / 5
              : Math.trunc(repositoriesHome.length / 5) + 1
          }
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default MainPage;
