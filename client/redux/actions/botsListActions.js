export const toggleBotSelect = (botType) => ({
  type: 'TOGGLE_SELECT',
  botType,
});

export const setPostCenter = (center) => ({
  type: 'POST_CENTER',
  center,
});

export const setOrigin = (origin) => ({
  type: 'POST_ORIGIN',
  origin,
});

export const setDestination = (destination) => ({
  type: 'POST_DESTINATION',
  destination,
});
