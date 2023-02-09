import { FilterProps } from './../searchAPI';

export const buildSearchQueryParams = (params: FilterProps | null) => {
  let queryString = '?'
  
  if (!params) {
    return;
  }

  Object.keys(params).map(key => {
    const currentParam = params[key as keyof FilterProps]!

    Object.keys(currentParam).map((prop)=> {
      const queryValue = encodeURIComponent(currentParam[prop as keyof typeof currentParam]);
        queryString += `${key}[${prop}]=${queryValue}`
      })
    }
  )

  return queryString;
}