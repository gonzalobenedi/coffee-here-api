import { Coffee } from './coffee';
import { Roaster } from './roaster';

export type Store = {
  id: string;
  name: string;
  phone: string;
  website?: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  usersRating: number;
  coffees: Coffee[];
  roasters: Roaster[];
};
