import { getUrl } from '../utilities';
import { TGarage, TCarProps, paginationOpts } from './interface';

class Garage implements TGarage {
  // constructor() {}
  static async getCars(params: paginationOpts = {}): Promise<Array<TCarProps>> {
    const url = getUrl<paginationOpts>('/garage', params);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        const message = await response.text();
        throw message;
      } else {
        const body = (await response.json()) as Array<TCarProps>;
        const total = params._limit ? response.headers.get('x-total-count') : body.length;
        console.log(body);
        console.log(`total: ${total}`);
        return body;
      }
    } catch (message) {
      console.log(message);
    }
  }

  static async getCar({ id }: { id: number }) {
    const url = getUrl(`/garage/${id}`, {});

    try {
      const response = await fetch(url);
      if (!response.ok) {
        const message = '404. Not found';
        throw message;
      } else {
        const body = (await response.json()) as TCarProps;
        console.log(body);
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async createCar({ name, color }: { name: string; color: string }) {
    const url = getUrl('/garage', {});

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, color }),
      });

      if (!response.ok) {
        const message = 'response is not ok';
        throw message;
      } else {
        const body = (await response.json()) as TCarProps;
        console.log(body);
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteCar({ id }: { id: number }) {
    const url = getUrl(`/garage/${id}`, {});

    try {
      const response = await fetch(url, { method: 'DELETE' });
      if (!response.ok) {
        const message = 'response was not ok';
        throw message;
      } else {
        const body = (await response.json()) as {}; // empty {}
        console.log(`car id=${id} was delete; ${body}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async updateCar({ id, name, color }: { id: number; name: string; color: string }) {
    const url = getUrl(`/garage/${id}`, {});

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, color }),
      });

      if (!response.ok) {
        const message = 'response was not ok';
        throw message;
      } else {
        const body = (await response.json()) as TCarProps;
        console.log(body);
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default Garage;
