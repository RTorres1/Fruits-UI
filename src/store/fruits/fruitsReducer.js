import { handleActions } from "redux-actions";
import actions from "./fruitsActions";

const initialState = {
    fruits: [],
};

export default handleActions({
    [actions.fetchSuccess]: (state, { payload }) => ({
        ...state,
        fruits: payload,
    }),
}, initialState);