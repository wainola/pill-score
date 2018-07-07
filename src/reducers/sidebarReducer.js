import {
  IS_VISIBLE
} from '../types'

const initialState = {
  isVisible: false
}

export default function sideBarReducer( state = initialState, action){
  switch(action.type){
    case IS_VISIBLE:
      console.log('is visible')
      return { ...state, isVisible: !action.payload }
    default:
      return state
  }
}