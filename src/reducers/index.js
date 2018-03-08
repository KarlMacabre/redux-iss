import { combineReducers } from 'redux';

// IMPORT REDUCERS
import { dataHasErrored, getLatLng, displayMap } from './satelliteReducers';

// combine reducers
export default combineReducers({
    dataHasErrored,
    getLatLng,
    displayMap
});