import { put, takeLatest } from 'redux-saga/effects';
import { setJobs, setLoading } from './actions';
import { GET_JOBS } from './constants';
import ApiStore from '../../request';

export interface ResponseGenerator {
    data: any;
}

function* getJobsSaga() {
    try {
        const response: ResponseGenerator = yield ApiStore.jobs.get('');
        yield put(setLoading(true));
        yield put(setJobs(response.data));
        yield put(setLoading(false));
    } catch (e) {
        yield put(setLoading(false));
        console.log(e);
    }
}

function* homeSaga() {
    yield takeLatest(GET_JOBS, getJobsSaga);
}

export default homeSaga;
