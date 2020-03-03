import { SAVE_INPUT, TOGGLE_CHECKBOX } from './types'

export const saveInput = (val, target) => dispatch => {
  dispatch({ type: SAVE_INPUT, payload: val, target: target })
}

export const toggleCheckbox = (val, target) => dispatch => {
  dispatch({ type: TOGGLE_CHECKBOX, payload: val, target: target })
}
