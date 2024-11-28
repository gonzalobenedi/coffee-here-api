import { Roaster } from './roaster';
import { Store } from './store';

export type Coffee = {
  id: string;
  name: string;
  description: string;
  notes: string;
  score: number;
  usersRating: number;
  roaster: Roaster;
  stores: Store[];
};
