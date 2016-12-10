export function selectEvent(color, image) {
  return {
    type: 'SELECT_EVENT',
    color,
    image
  }
}
