import './style.sass';

import Car from './js/car/car';
import Garage from './js/garage/garage';
import Winners from './js/winners/winners';

const Renault = new Car('Logan', 'gray');

// Renault.startEngine({ id: 1 });
// Renault.stopEngine({ id: 3 });
// Renault.selectDriveMode({ id: 1 });
// Renault.go({ id: 2 });

const garage = new Garage();

// garage.getCars();
// garage.getCars({ _page: 1, _limit: 2 });

// garage.createCar({ name: 'Moskwich', color: 'red' });
// garage.getCar({ id: 12 });
// garage.deleteCar({ id: 4 });
// garage.updateCar({ id: 3, name: 'Mitsubishi', color: 'red' });

const winners = new Winners();
// winners.getWinners();
// winners.getWinner({ id: 1 });
// winners.createWinner({ id: 4, wins: 2, time: 10 });
// winners.deleteWinner({ id: 3 });
// winners.updateWinner({ id: 1, wins: 3, time: 30 });

//   _page?: number;
//   _limit?: number;
//   _sort?: 'id' | 'wins' | 'time';
//   _order?: 'ASC' | 'DESC'
