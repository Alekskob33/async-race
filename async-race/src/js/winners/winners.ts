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
}

export default Winners;
