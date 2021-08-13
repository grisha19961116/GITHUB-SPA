import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import s from './RepoView.module.css';
import { getRepositoriesMemo } from '../../redux/repositories/selectors';

interface IID {
  id: string;
}
const RepoView = () => {
  const { params }: { params: IID } = useRouteMatch();
  const id = params.id;
  const { repositoriesHome } = useSelector(getRepositoriesMemo);
  const repository =
    repositoriesHome &&
    repositoriesHome.filter((el: any) => el.id === Number(id));

  return repository && repository[0] ? (
    <div className={s.repoViewWrapper}>
      <h5>login : {repository[0].owner.login}</h5>
      <h5>name : {repository[0].name}</h5>
      <h5>created_at : {repository[0].created_at}</h5>
      <h5>github_url : {repository[0].html_url}</h5>
      <img src={repository[0].owner.avatar_url} alt="sheet"></img>
      <h5>github_url : {repository[0].html_url}</h5>
    </div>
  ) : null;
};

export default RepoView;
