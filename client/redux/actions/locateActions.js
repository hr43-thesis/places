export function loadLocate(follows) {
  return {
    type: 'LOAD_LOCATE',
    follows,
  };
}

export function filterLocate(follows, filter) {
  return {
    type: 'FILTER_LOCATE',
    follows,
    filter,
  };
}

export function updateShowing(index) {
  return {
    type: 'UPDATE_SHOWING_LOCATE',
    index,
  };
}

export function hideAll() {
  return {
    type: 'HIDE_ALL_LOCATE',
  };
}
