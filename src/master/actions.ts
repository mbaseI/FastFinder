import { SET_MODAL } from "./constants";

export function setModal(id: string) {
    return {
        type: SET_MODAL,
        id,
    };
}