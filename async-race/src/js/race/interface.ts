export interface TRace {
  generateRandomCars: () => Array<generatedCarsData>;
  // startRace: () => void;
  // resetRace: () => void;
}

export type generatedCarsData = Array<{
  fullName: string;
  color: string;
  carModel: string;
  carBrand: string;
}>;
