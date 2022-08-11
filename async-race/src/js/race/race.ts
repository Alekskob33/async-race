import { TRace, generatedCarsData } from './interface';
import { Garage } from '../garage/garage';
import { Car } from '../car/car';

class Race {
  static generateRandomCars(
    carsNumb = 100,
    namesBase: { models: Array<string>; brands: Array<string> },
    colorsBase: Array<string>
  ) {
    if (namesBase.models.length < 2 || namesBase.brands.length < 2 || colorsBase.length < 2) {
      console.log('Too small Base. Pass at least 10 pairs of Names and Colors');
    }

    const random = (dataBase: Array<string>) => Math.floor(Math.random() * dataBase.length);
    const randomCars: generatedCarsData = new Array(carsNumb).fill('').map(() => {
      const carModel = namesBase.models[random(namesBase.models)];
      const carBrand = namesBase.brands[random(namesBase.brands)];
      const color = colorsBase[random(colorsBase)];
      const fullName = `${carModel} ${carBrand}`;
      const carData = { fullName, color, carModel, carBrand };
      return carData;
    });
    return randomCars;
  }

  static async startRace() {
    const cars = await Garage.getCars();
    const enginePromises = cars.map((car) => {
      return async () => Cars.startEngine(car.id);
    });
    const startedEnginesBodyArray = await Promise.all(enginePromises);
    // const startedEnginesBodyArray = carsId.map(async (item) => {
    //   return await Cars.startEngine({ id: item.id });
    // });

    // 1). запускаем все двигатели (на сервере)
    // ждем ответа от всех участников

    // 2). запускаем режим 'Drive Mode' для всех машин
    // ждем ответа от всех учатсников

    // показываем демонстрацию гонки (запускаем анимацию)
  }
  // resetRace() { }
}
