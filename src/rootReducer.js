import { combineReducers } from 'redux';

import userReducer from './reducers/user';
import AssetReducer from './actions/asset'
import assetReducer from './reducers/asset';


export default combineReducers({
    user: userReducer,
    asset: assetReducer
});
