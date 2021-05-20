import camelize from "camelize";
import api from "../../../api/restaurants.api";

export const restaurantsRequest = async (
  location: string = "37.7749295,-122.4194155"
) => {
  let locationList;
  let locationName;
  let locationData;
  try {
    locationList = await api.get("locations");
    locationName = await locationList.data[location];
    locationData = await api.get(locationName);
  } catch (err) {
    console.error(err);
  } finally {
    return locationData;
  }
};

export const restaurantsTransform = (results) => {
  let mappedResults;
  try {
    mappedResults = results.data.results.map((restaurant) => {
      return {
        name: restaurant.name,
        icon: restaurant.icon,
        photos: "https://picsum.photos/200/300",
        address: restaurant.vicinity,
        isOpenNow: restaurant.opening_hours?.open_now,
        isClosedTemporarily:
          restaurant.business_status === "CLOSED_TEMPORARILY",
        rating: restaurant.rating,
      };
    });
  } catch (err) {
    console.error(err);
  } finally {
    return mappedResults;
  }
};
