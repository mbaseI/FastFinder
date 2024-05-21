import storage from 'redux-persist/lib/storage';
import { produce } from 'immer';
import { Action } from '@/types';
import { SET_MODAL } from './constants';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'Master',
    storage: storage,
    blacklist: [],
};

export interface InitialState {
    activeModal: string;
}

export const initialState: InitialState = {
    activeModal: "",
};

const masterReducer = (state = initialState, action: Action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case SET_MODAL:
                draft.activeModal = action.id
                break;
            default:
                break;
        }
    });

export default persistReducer(persistConfig, masterReducer);
