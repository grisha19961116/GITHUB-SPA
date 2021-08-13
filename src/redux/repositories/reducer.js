import { createReducer } from '@reduxjs/toolkit';

import {
  actionAddRepository,
  actionRemoveRepository,
  actionUpdateRepository,
  actionSortRepository,
  actionGetRepository,
} from './actions.js';

const initialState = { repositoriesHome: [] };

const reducerRepositories = createReducer(initialState, {
  [actionAddRepository]: (state, { payload }) => {
    const repositoryAdd = [...state, payload];
    return repositoryAdd;
  },

  [actionRemoveRepository]: (state, { payload }) => {
    const repositoryRemove = [
      ...state.filter(repository => repository.id !== payload),
    ];
    return repositoryRemove;
  },

  [actionUpdateRepository]: (state, { payload }) => {
    let index;
    state.repositoriesHome.find((repository, i) => {
      if (repository.id === payload) index = i;
    });
    const repositories = JSON.parse(JSON.stringify(state));
    repositories.repositoriesHome[index]['selected'] = !repositories
      .repositoriesHome[index]['selected'];
    return repositories;
  },

  [actionSortRepository]: (_, { payload }) => {
    return { repositoriesHome: payload };
  },

  [actionGetRepository]: (state, { payload }) => {
    const repositories = { ...state };
    repositories.repositoriesHome = payload.map(el => {
      return { ...el, selected: false };
    });
    return repositories;
  },
});

export default reducerRepositories;
