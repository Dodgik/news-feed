import { createAction } from 'redux-actions';
import { FilterModel } from 'app/models';

export namespace NewsActions {
  export enum Type {
    FETCH_NEWS = 'FETCH_NEWS',
    REQUEST_NEWS = 'REQUEST_NEWS',
    RECEIVE_NEWS = 'RECEIVE_NEWS',
    RECEIVE_FAIL_NEWS = 'RECEIVE_FAIL_NEWS',
  }

  export const fetchNews = createAction<FilterModel>(Type.FETCH_NEWS);
  export const requestNews = createAction(Type.REQUEST_NEWS);
  export const receiveNews = createAction(Type.RECEIVE_NEWS, (news: any) => news);
  export const receiveFailNews = createAction(Type.RECEIVE_FAIL_NEWS, (error: any) => error);
}
