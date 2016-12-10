/* @flow */

type UiState = {
  selectedEventColor: ?string,
  selectedEventImage: ?string
}

const initialState: UiState = {
  selectedEventColor: null,
  selectedEventImage: null
}

export default function uiReducer (state: UiState = initialState, action: any): UiState {
  switch (action.type) {
    case 'SELECT_EVENT':
      return {
        selectedEventColor: action.color,
        selectedEventImage: action.image
      }

    default:
      return state
  }
}
