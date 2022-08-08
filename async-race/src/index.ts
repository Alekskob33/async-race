import './style.sass';

import Car from './js/car/car';
import Garage from './js/garage/garage';

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
