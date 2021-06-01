import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { RestaurantProps } from "../../../types/restaurant.interface";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

interface RestaurantContextProps {
  restaurants: RestaurantProps[];
  isLoading: boolean;
}

interface RestaurantProvider {
  children: JSX.Element | JSX.Element[];
}

export const RestaurantsContext = createContext<RestaurantContextProps>({});

export const RestaurantsProvider = ({ children }: RestaurantProvider) => {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>();
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const getRestaurants = useCallback(async () => {
    setIsLoading(true);
    let request;
    let transformed;
    try {
      request = await restaurantsRequest();
      transformed = restaurantsTransform(request);
    } catch (err) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      setRestaurants(transformed);
    }
  }, []);

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

export const useRestaurants = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  return { restaurants, isLoading };
};
