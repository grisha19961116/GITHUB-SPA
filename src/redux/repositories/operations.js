import { toast } from 'react-toastify';

import { actionGetRepository } from './actions';
import { actionIsLoading } from '../loading/actions';

import { getAllRepositories } from '../../data/api.js';

const errLogger = ({ message }) =>
  toast.error(`🚀 ${message}!`, {
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const asyncOperationGetRepositories = (
  githubName,
  repositoryName,
) => async dispatch => {
  try {
    dispatch(actionIsLoading(true));
    const data = await getAllRepositories(githubName, repositoryName);
    console.log(data, `asyncOperationGetRepositories`);
    if (data.length === 0) return errLogger({ message: 'Not exist this repo' });
    localStorage.removeItem('page');
    dispatch(actionGetRepository(data));
  } catch (err) {
    errLogger(err);
  } finally {
    dispatch(actionIsLoading(false));
  }
};

export { asyncOperationGetRepositories };
