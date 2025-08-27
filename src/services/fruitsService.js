import { FRUITS_URL, FRUIT_URI } from '../constants/urlConstants';
import { httpGet } from '../helpers/api';

export const getAllFruits = () => {
    return httpGet(FRUITS_URL);
};

export const getFruits = (name, color, inSeason) => {
    const queryString = `name=${name}&color=${color}&in_season=${inSeason}`;
    return httpGet(`${FRUITS_URL}/${FRUIT_URI}`, queryString);
};