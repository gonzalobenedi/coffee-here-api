import { Coffee } from './coffee';
import { Store } from './store';

export type Roaster = {
  id: string;
  name: string;
  website?: string;
  phone?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  country?: string;
  coffees: Coffee[];
  stores: Store[];
};
