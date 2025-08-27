import http from '../config/http-common';

function createUrl(url, queryString) {
    return queryString ? `${url}?${queryString}` : url;
}

function handleResponse(fullResponse = false) {
    return response => fullResponse ? response : response.data;
}

export const httpGet = (url, qs, withResponse = false) => {
    return http.get(createUrl(url, qs)).then(handleResponse(withResponse));
};