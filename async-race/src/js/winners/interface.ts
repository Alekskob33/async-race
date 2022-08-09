export interface TWinners {
  getWinners: (params: Opts) => void;
}

export type Opts = {
  _page?: number;
  _limit?: number;
  _sort?: 'id' | 'wins' | 'time';
  _order?: 'ASC' | 'DESC';
};

export type winner = {
  id?: number;
  wins?: number;
  time?: number;
};
