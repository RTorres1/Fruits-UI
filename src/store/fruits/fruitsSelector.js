import { createSelector } from "reselect";

const getState = (state) => state?.fruitsReducer || {};

const getFruits = (state) => getState(state).fruits || [];

// Note: not needed in this scenario but wanted to add example of memoized selector
const getMappedFruits = createSelector(getFruits, (fruitsFromResponse) => ({
    name: fruitsFromResponse.name,
    colors: fruitsFromResponse.colors,
    inSeason: fruitsFromResponse.inSeason,
}));

export default {
    fetchedFruits: getFruits,
};