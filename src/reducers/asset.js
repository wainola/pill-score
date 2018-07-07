import {
POST_ASSET,
OK_POST_ASSET,
FAIL_POST_ASSET
} from '../types';

const initialState = {
    isPosting: false
}

export default function assetReducer (state = initialState, action) {
    switch (action.type) {
        case POST_ASSET:
            return {
                ...state,
                isPosting: true
            };
    
        case OK_POST_ASSET:
            const { asset } = action.payload.data

            return {
                ...state,
                asset,
                isPosting: false
            };

        case FAIL_POST_ASSET: 
            return {
                ...initialState
            };
            
        default:
            return {
                ...initialState
            };
    }
}