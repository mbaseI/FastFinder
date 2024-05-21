import { produce } from 'immer';
import { SET_JOBS, SET_LOADING } from './constants';
import { Action } from '../../types.ts';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'Home',
    storage: storage,
    blacklist: ['loading'],
};

export interface InitialState {
    jobs: any;
    loading: boolean;
}

export const initialState = {
    jobs: [],
    loading: false,
};

const homeReducer = (state = initialState, action: Action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case SET_JOBS:
                draft.jobs = action.values;
                break;
            case SET_LOADING:
                draft.loading = action.values;
                break;
            default:
                break;
        }
    });

export default persistReducer(persistConfig, homeReducer);
