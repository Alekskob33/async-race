import './style.sass';

import Car from './js/car/car';
import Garage from './js/garage/garage';
import Winners from './js/winners/winners';

const Renault = new Car('Logan', 'gray');

// Renault.startEngine({ id: 1 });
// Renault.stopEngine({ id: 3 });
// Renault.selectDriveMode({ id: 1 });
// Renault.go({ id: 2 });

// Garage;

// Garage.getCars();
// Garage.getCars({ _page: 1, _limit: 2 });

// Garage.createCar({ name: 'Moskwich', color: 'red' });
// Garage.getCar({ id: 12 });
// Garage.deleteCar({ id: 4 });
// Garage.updateCar({ id: 3, name: 'Mitsubishi', color: 'red' });

// Winners;

// Winners.getWinners();
// Winners.getWinner({ id: 1 });
// Winners.createWinner({ id: 4, wins: 2, time: 10 });
// Winners.deleteWinner({ id: 3 });
// Winners.updateWinner({ id: 1, wins: 3, time: 30 });

// options
//   _page?: number;
//   _limit?: number;
//   _sort?: 'id' | 'wins' | 'time';
//   _order?: 'ASC' | 'DESC'
