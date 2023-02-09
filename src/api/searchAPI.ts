import axios from 'axios';
import { deserialize } from './utils/deserializer';
import { buildSearchQueryParams } from './utils/buildSearchQueryParams';

export interface PageProps {
  limit?: number;
  offset?: number;
}

export interface SearchFilterProps {
  keywords: string
}

export interface FilterProps {
  page?: PageProps
  filter?: SearchFilterProps
}

export interface VehicleTypesProps {
  label: string;
  type: string;
}

export interface MetaProps {
  vehicleTypes: VehicleTypesProps[]
}

export interface RVProps {
  id: number;
  name: string;
  description: string;
  primaryImageUrl: string;
  type: string;
}

export const getRVList = (filters: FilterProps | null) =>{
  const queryString = filters ? buildSearchQueryParams(filters) : '';

  return axios.get(`https://search.outdoorsy.com/rentals${queryString}`).then(response => {
    return deserialize<RVProps, MetaProps>(response.data);
  })
}
 
