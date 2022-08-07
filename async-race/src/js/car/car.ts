import { getUrl } from '../utilities';

import TCar from './interface';
import { targetCar } from './interface';

class Car implements TCar {
  name: string;
  color: string;
  status: string; // started | stopped | drive
  duration: number;

  constructor(name: string, color: string, status = 'stopped') {
    this.name = name;
    this.color = color;
    this.status = status;
    this.duration = 0;
  }

  async startEngine({ id }: { id: number }) {
    const url = getUrl<{ id: number; status: string }>('/engine', { id, status: 'started' });
    try {
      console.log('Trying to start Engine ...');
      const response = await fetch(url, { method: 'PATCH' });

      if (!response.ok) {
        const message = await response.text();
        throw message;
      } else {
        const body = (await response.json()) as {
          velocity: string;
          distance: string;
        };
        this.duration = calcDuration(body);
        this.status = 'started';
        console.log(body);
        console.log(this.duration);
      }
    } catch (message) {
      console.log(message);
      throw message;
    }
  }

  async stopEngine({ id }: { id: number }) {
    const url = getUrl<{ id: number; status: string }>('/engine', { id, status: 'stopped' });
    try {
      console.log('Trying to stop Engine ...');
      const response = await fetch(url, { method: 'PATCH' });

      if (!response.ok) {
        const message = await response.text();
        throw message;
      } else {
        const body = (await response.json()) as {
          velocity: string;
          distance: string;
        };
        this.status = 'stopped';
        console.log(body);
      }
    } catch (message) {
      console.log(message);
    }
  }

  async selectDriveMode({ id }: { id: number }) {
    const url = getUrl<{ id: number; status: string }>('/engine', { id, status: 'drive' });
    try {
      console.log('Switch Drive Mode...');
      const response = await fetch(url, { method: 'PATCH' });

      if (!response.ok) {
        const message = await response.text();
        if (response.status >= 500) {
          console.log('Ohh, no! The engine has been broken. Stop now!');
        }
        throw message;
      }
      this.status = 'drive';
      const body = (await response.json()) as string;

      console.log('Finished !');
      console.log(body);
    } catch (message) {
      console.log(message);
    }
  }

  async go(carParams: targetCar) {
    const { id } = carParams;
    try {
      await this.startEngine({ id });
      await this.selectDriveMode({ id });
    } catch (error) {
      console.log(error);
    }
  }
}

const calcDuration = (obj: { velocity: string; distance: string }): number => {
  const { velocity, distance } = obj;
  const time = Number(distance) / Number(velocity);
  console.log(`Duration (ms): ${time}`);
  return time;
};

export default Car;
