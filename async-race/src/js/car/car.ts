import { getUrl } from '../utilities';

import TCar from './interface';
import { targetCar } from './interface';

class Car implements TCar {
  name: string;
  color: string;
  status: string; // started | stopped | drive

  constructor(name: string, color: string, status = 'stopped') {
    this.name = name;
    this.color = color;
    this.status = status;
  }

  async startEngine({ id }: { id: number }) {
    const url = getUrl<{ id: number; status: string }>('/engine', { id, status: 'started' });
    const response = await fetch(url, { method: 'PATCH' });

    console.log('Trying to start Engine ...');
    try {
      if (!response.ok) {
        const message = await response.text();
        throw message;
      } else {
        const body = (await response.json()) as {
          velocity: string;
          distance: string;
        };
        console.log(body);
        const duration = calcDuration(body);
      }
    } catch (message) {
      console.log(message);
    }
  }

  async stopEngine({ id }: { id: number }) {
    const url = getUrl<{ id: number; status: string }>('/engine', { id, status: 'stopped' });
    const response = await fetch(url, { method: 'PATCH' });

    console.log('Trying to stop Engine ...');
    try {
      if (!response.ok) {
        const message = await response.text();
        throw message;
      } else {
        const body = (await response.json()) as {
          velocity: string;
          distance: string;
        };
        console.log(body);
      }
    } catch (message) {
      console.log(message);
    }
  }

  async selectDriveMode({ id }: { id: number }) {
    const url = getUrl<{ id: number; status: string }>('/engine', { id, status: 'drive' });
    const response = await fetch(url, { method: 'PATCH' });

    try {
      if (!response.ok) {
        const message = await response.text();
        throw message;
      }

      const body = (await response.json()) as string;
      console.log(body);
    } catch (message) {
      console.log(message);
    }
  }

  async go(carParams: targetCar) {
    const { id } = carParams;
    await this.startEngine({ id });
    await this.selectDriveMode({ id });
  }
}

const calcDuration = (obj: { velocity: string; distance: string }): number => {
  const { velocity, distance } = obj;
  const time = Number(distance) / Number(velocity);
  console.log(`Duration (ms): ${time}`);
  return time;
};

export default Car;
