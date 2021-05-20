import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext({});

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setRestaurants(transformed);
    }
  }, []);

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

export const useRestaurants = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return { restaurants, isLoading, error };
};
