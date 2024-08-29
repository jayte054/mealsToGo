export interface RestaurantInfoObject {
  name: string;
  icon: string;
  address: string;
  photos: string[];
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}

export interface Restaurant {
  restaurant?: RestaurantInfoObject;
}
