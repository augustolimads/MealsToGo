import { RestaurantProps } from "./restaurant.interface";

export interface RestaurantsContextProps {
  restaurants: RestaurantProps[];
  isLoading: boolean;
  error: null | string;
}
