export function updateDisplayPlaces(places, filter) {
  return { type: 'FILTER_PLACES', places, filter };
}

export function updateShowing(index) {
  return { type: 'UPDATE_SHOWING', index };
}

export function hideAll() {
  return { type: 'HIDE_ALL' };
}
