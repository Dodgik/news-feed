import { put, call, fork, takeEvery } from 'redux-saga/effects'
import { NewsActions } from 'app/actions/news';

import api from '../api'


export function* fetchNews(data: any) {
  yield put(NewsActions.requestNews())
  try {
    const { response, error } = yield call(api.news.all, data.payload)
    if (response) {
      yield put(NewsActions.receiveNews(response))
    } else {
      yield put(NewsActions.receiveFailNews(error))
    }
  } catch (e) {
    yield put(NewsActions.receiveFailNews(e))
  }
}

export function* watchFetchNews() {
  yield takeEvery(NewsActions.Type.FETCH_NEWS, fetchNews)
}

export function* startup() {
  yield fork(fetchNews, {})
}

export default function* root() {
  yield fork(startup)

  yield fork(watchFetchNews)
}
