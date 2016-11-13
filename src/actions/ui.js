export function selectEvent(color, thumbnail, image) {
  return {
    type: 'SELECT_EVENT',
    color,
    thumbnail,
    image
  }
}
