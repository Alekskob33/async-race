export interface TGarage {
  getCars: (params: paginationOpts) => Promise<void>;
  // getCar: () => void;
  // createCar: () => void;
  // deleteCar: () => void;
  // updateCar: () => void;
}

export interface TCarProps {
  name: string;
  color: string;
  id: string;
}

export type paginationOpts = {
  _page?: number;
  _limit?: number;
};
