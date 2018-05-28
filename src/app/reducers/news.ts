import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { NewsActions } from 'app/actions/news';

const initialState: RootState.NewsState = {
  articles: [],
  country: '',
  category: '',
  isFetching: false,
  error: '',
};

export const newsReducer = handleActions<RootState.NewsState, any>(
  {
    [NewsActions.Type.FETCH_NEWS]: (state, action) => {
      return {
        ...state,
        country: action.payload.country,
        category: action.payload.category,
      };
    },
    [NewsActions.Type.REQUEST_NEWS]: (state, action) => {
      return { ...state, isFetching: true };
    },
    [NewsActions.Type.RECEIVE_NEWS]: (state, action) => {
      return {
        ...state,
        articles: action.payload.articles,
        isFetching: false,
      };
    },
    [NewsActions.Type.RECEIVE_FAIL_NEWS]: (state, action) => {
      return { ...state, isFetching: false };
    },
  },
  initialState
);
