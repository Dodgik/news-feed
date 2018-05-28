/* eslint-disable no-constant-condition */

import { fork } from 'redux-saga/effects'

import newsSaga from './news'


export default function* root() {
  yield fork(newsSaga)
}
