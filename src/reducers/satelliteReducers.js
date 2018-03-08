
export function dataHasErrored(state = false, action) {
    switch (action.type) {
        case 'FETCH_ERROR':
            return action.hasErrored;

        default:
            return state;
    }
}

export function getLatLng(state = [], action) {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return action.latLng;

        default:
            return state;
    }
}

export function displayMap(state = false, action) {

    switch (action.type) {
        case 'DISPLAY_MAP':
            return action.isDisplayed;

        default:
            return state;
    }
}

