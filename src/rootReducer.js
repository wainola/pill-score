import { combineReducers } from 'redux';

import userReducer from './reducers/user';
import assetReducer from './reducers/asset';
import sidebarReducer from './reducers/sidebarReducer'

export default combineReducers({
    user: userReducer,
    asset: assetReducer,
    sidebar: sidebarReducer
});
