import {
  IS_VISIBLE
} from '../types'

export const handleVisible = payload => {
  type: IS_VISIBLE,
  payload
}