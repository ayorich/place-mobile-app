export const ADD_PALCE = "ADD_PLACE";

export const addPlace = (title) => {
  return {
    type: ADD_PALCE,
    placeData: {
      title: title,
    },
  };
};
