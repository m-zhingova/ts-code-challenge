import axios from 'axios';
import { deserialize } from './utils/deserializer';

export interface PageProps {
  limit?: number;
  offset?: number;
}

export interface FilterProps {
  page?: PageProps
}

export interface vehicleTypesProps {
  label: string;
  type: string;
}

export interface MetaProps {
  vehicleTypes: vehicleTypesProps[]
}

interface RVProps {
  id: number;
  name: string;
  description: string;
  primaryImageUrl: string;
  type: string;
}

export const getRVList = () =>
  axios.get('https://search.outdoorsy.com/rentals').then(response => {
    return deserialize<RVProps, MetaProps>(response.data);
  })
