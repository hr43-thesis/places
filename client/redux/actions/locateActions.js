export function loadLocate(follows) {
  // Initial loader action to filter out users own places
  return {
    type: 'LOAD_LOCATE',
    follows,
  };
}

export function updateLocate(follows, filter) {
  return { type: 'FILTER_LOCATE', follows, filter };
}

export function updateShowing(index) {
  return { type: 'UPDATE_SHOWING_LOCATE', index };
}

export function hideAll() {
  return { type: 'HIDE_ALL_LOCATE' };
}
