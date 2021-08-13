import { createSelector } from 'reselect';

const getRepositories = state => state.repositories;

const getRepositoriesMemo = createSelector(
  [getRepositories],
  repositories => repositories,
);

export { getRepositoriesMemo };
