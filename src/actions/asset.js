import Api from '../api';
import {
POST_ASSET,
OK_POST_ASSET,
FAIL_POST_ASSET
} from '../types';

export const postAsset = () => ({
    type: POST_ASSET
});

export const assetPosted = payload => ({
    type: OK_POST_ASSET,
    payload
})

export const failPostAsset = () => ({
    type: FAIL_POST_ASSET
});

export const sendPostAsset = asset => dispatch => {
    dispatch(postAsset());

    return Api.addAsset(asset)
        .then(res => dispatch(assetPosted(res)))
        .catch(res => dispatch(failPostAsset(res)));
}
