import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import s from './ListRepo.module.css';
import github from '../../../img/github.jpg';
import { actionUpdateRepository } from '../../../redux/repositories/actions';

interface IListRepo {
  page: number;
  repositories: object[];
}
const ListRepo = ({ page, repositories }: IListRepo) => {
  const dispatch = useDispatch();
  const handleSelect = async (id: number) => {
    await dispatch(actionUpdateRepository(id));
  };

  return repositories ? (
    <ul className={s.repositoriesList}>
      {repositories.slice((page - 1) * 5, page * 5).map((el: any, i) => {
        const { id, name, stargazers_count, selected } = el;
        return (
          <li className={s.repositoriesList__item} key={i}>
            <img
              className={s.repositoriesList__img}
              src={github}
              alt={name}
              width="150"
              height="150"
            ></img>
            <h5 className={s.repositoriesList__name}>Github name : {name}</h5>
            <h5 className={s.repositoriesList__stars}>
              Repository stars : {stargazers_count}
            </h5>
            <div className={s.repositoriesList__btnWrapper}>
              <button className={s.repositoriesList__viewMore}>
                <NavLink
                  className={s.repositoriesList__viewMore__navLink}
                  exact
                  to={`view/${id}`}
                >
                  View more
                </NavLink>
              </button>
              <button
                onClick={() => handleSelect(id)}
                className={
                  selected
                    ? s.repositoriesList__remove
                    : s.repositoriesList__select
                }
              >
                {selected ? 'Un Select' : 'Select'}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default ListRepo;
