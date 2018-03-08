import axios from 'axios';

export function dataHasErrored(bool) {
    return {
        type: 'FETCH_ERROR',
        hasErrored: bool
    };
}

export function fetchDataSuccess(latLng) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        latLng
    };
}

export function displayMap(bool) {
    return {
        type: 'DISPLAY_MAP',
        isDisplayed: bool
    }
}

export function fetchData(url) {
    return dispatch => {
        axios.get(url)
            .then(res => {
                dispatch(fetchDataSuccess(res.data.iss_position))
            })
            .catch(() => dispatch(dataHasErrored(true)));


    };
}