import { ADD_PALCE, SET_PALCES } from "./places-actions";
import Place from "../models/place";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PALCES:
      return {
        places: action.places.map(
          (pl) =>
            new Place(
              pl.id.toString(),
              pl.title,
              pl.imageUri,
              pl.address,
              pl.lat,
              pl.lng
            )
        ),
      };
    case ADD_PALCE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image,
        action.placeData.address,
        action.placeData.coords.lat,
        action.placeData.coords.lng
      );
      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
