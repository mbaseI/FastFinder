import { createSelector } from 'reselect';
import { InitialState, initialState } from './reducer';

const selectMaster = (state: { master: InitialState }) => state.master || initialState;

const makeSelectMaster = () => createSelector(selectMaster, (subState) => subState);

const makeSelectModal = () => createSelector(selectMaster, (subState) => subState.activeModal);

export {
    makeSelectMaster,
    makeSelectModal,
};
