import { createAction } from '@reduxjs/toolkit';

const actionAddRepository = createAction('repositories/add', newRepository => ({
  payload: newRepository,
}));

const actionRemoveRepository = createAction('repositories/remove', id => ({
  payload: id,
}));

const actionUpdateRepository = createAction('repositories/update', id => ({
  payload: id,
}));

const actionSortRepository = createAction(
  'repositories/sort',
  repositories => ({
    payload: repositories,
  }),
);

const actionGetRepository = createAction('repositories/get', repositories => ({
  payload: repositories,
}));

export {
  actionAddRepository,
  actionRemoveRepository,
  actionUpdateRepository,
  actionSortRepository,
  actionGetRepository,
};
