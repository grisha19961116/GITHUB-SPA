import { createAction } from '@reduxjs/toolkit';

const actionIsLoading = createAction('projects/loading', flag => ({
  payload: flag,
}));

export { actionIsLoading };
