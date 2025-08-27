import { createActions } from 'redux-actions';

/**
 * @typedef fruitsActions
 * @property {function} fetch
 * @property {function} fetchAll
 * @property {function} fetchSuccess
 */

const fruitsActions = createActions(
    "FETCH",
    "FETCH_ALL",
    "FETCH_SUCCESS",
    {
        prefix: "FRUITS",
        namespace: "_",
    }
);

export default fruitsActions;