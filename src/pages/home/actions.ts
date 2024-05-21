import { GET_JOBS, SET_JOBS, SET_LOADING } from './constants';

export function getJobs() {
    return {
        type: GET_JOBS,
    };
}

export function setJobs(values: any) {
    return {
        type: SET_JOBS,
        values,
    };
}

export function setLoading(values: boolean) {
    return {
        type: SET_LOADING,
        values,
    };
}
