export function loadDisplayPlaces(places, userId) {
  // Initial loader action to filter out users own places
  return {
    type: 'LOAD_DISPLAY_PLACES',
    places, userId,
  };
}

export function clearDisplay() {
  return {
    type: 'CLEAR_DISPLAY',
  };
}

export function updateDisplayPlaces(places, userId, filter, favs) {
  return { type: 'FILTER_PLACES', places, userId, filter, favs };
}

export function updateShowing(index) {
  return { type: 'UPDATE_SHOWING', index };
}

export function hideAll() {
  return { type: 'HIDE_ALL' };
}
