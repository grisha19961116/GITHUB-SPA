import { useDispatch, useSelector } from 'react-redux';

import s from './SortBar.module.css';
import { actionSortRepository } from '../../../redux/repositories/actions';
import { getRepositoriesMemo } from '../../../redux/repositories/selectors';

const SortBar = () => {
  const { repositoriesHome } = useSelector(getRepositoriesMemo);
  const dispatch = useDispatch();
  const handleSort = async (sortBy: string) => {
    const arrRepo = repositoriesHome.slice();
    const data = await arrRepo.sort(function (a: any, b: any) {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      } else if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
    await dispatch(actionSortRepository(data));
  };

  return repositoriesHome.length > 0 ? (
    <div className={s.sortBarWrapper}>
      <button onClick={() => handleSort('name')}>Sort By Data</button>
      <button onClick={() => handleSort('stargazers_count')}>
        Sort By Popularity
      </button>
      <button onClick={() => handleSort('created_at')}>Sort By Name</button>
    </div>
  ) : null;
};

export default SortBar;
