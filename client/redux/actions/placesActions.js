export function loadPlaces(places = { 123: { id: 1, placeName: 'Burger Joint' } }) {
  return { type: 'LOAD_PLACES', places };
}
