/* @flow */

type UiState = {
  loggedIn: boolean
}

const initialState: UiState = {
  loggedIn: false
}

export default function uiReducer (state: UiState = initialState, action): UiState {
  switch (action.type) {
    default:
      return state
  }
}
