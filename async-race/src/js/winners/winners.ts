import { getUrl } from '../utilities';
import { TWinners, Opts, winner } from './interface';

class Winners implements TWinners {
  async getWinners(params: Opts = {}) {
    const url = getUrl('/winners', params);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw 'response was not ok';
      } else {
        const body = (await response.json()) as Array<winner>;
        const total = params._limit ? response.headers.get('X-Total-Count') : body.length;
        console.log(body);
        console.log(`total: ${total}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getWinner({ id }: { id: number }) {
    const url = getUrl(`/winners/${id}`, {});

    try {
      const response = await fetch(url);
      if (!response.ok) throw 'response was not ok';
      const body = (await response.json()) as winner;
      console.log(body);
    } catch (err) {
      console.log(err);
    }
  }

  async createWinner({ id, wins, time }: winner) {
    const url = getUrl('/winners', {});

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, wins, time }),
      });
      if (!response.ok) {
        const message = await response.text();
        throw message;
      } else {
        const body = (await response.json()) as winner;
        console.log(body);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async deleteWinner({ id }: { id: number }) {
    const url = getUrl(`/winners/${id}`, {});

    try {
      const response = await fetch(url, { method: 'DELETE' });
      if (!response.ok) throw 'response was not ok';
      const body = (await response.json()) as {};
      console.log(`The winner id=${id} was delete. ${body}`);
    } catch (err) {
      console.log(err);
    }
  }

  async updateWinner({ id, wins, time }: winner) {
    const url = getUrl(`/winners/${id}`, {});

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wins, time }),
      });
      if (!response.ok) {
        const message = await response.json() as {};
        throw message;
      } else {
        const body = (await response.json()) as winner;
        console.log(body);
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default Winners;
