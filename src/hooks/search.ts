import { useState } from "react"
import { useQuery } from "react-query";
import { FilterProps, getRVList } from "../api/searchAPI";

export const useSearch = () => {
  const [filters, setFilters] = useState<FilterProps | null>()

  const { data, ...rest } = useQuery(['rv-list', ], getRVList);

  const resetFilters = () => {
    setFilters(null)
  }

  return {
    resetFilters,
    filters,
    setFilters,
    data: data?.result,
    metaData: data?.metaData,
    ...rest
  }

}