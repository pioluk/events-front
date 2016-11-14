/* @flow */

type UiState = {
  selectedEventColor: ?string,
  selectedEventThumbnail: ?string,
  selectedEventImage: ?string
}

const initialState: UiState = {
  selectedEventColor: null,
  selectedEventThumbnail: null,
  selectedEventImage: null
}

export default function uiReducer (state: UiState = initialState, action: any): UiState {
  switch (action.type) {
    case 'SELECT_EVENT':
      return {
        selectedEventColor: action.color,
        selectedEventThumbnail: action.thumbnail,
        selectedEventImage: action.image
      }

    default:
      return state
  }
}
