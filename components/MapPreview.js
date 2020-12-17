import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

import ENV from "../env";

const MapPreview = (props) => {
  let mapRegion, markerCoordinates;
  if (props.location) {
    mapRegion = {
      latitude: props.location.lat,
      longitude: props.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    markerCoordinates = {
      latitude: props.location.lat,
      longitude: props.location.lng,
    };
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.mapPreview, ...props.style }}
    >
      {props.location ? (
        <MapView style={styles.mapImage} region={mapRegion}>
          {markerCoordinates && (
            <Marker title="My Location" coordinate={markerCoordinates}></Marker>
          )}
        </MapView>
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

export default MapPreview;
