import { deserialize as fractalDeserializer, CaseType, ExistingDocumentObject  } from 'jsonapi-fractal';

const toCamel = (s: string) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

const keysToCamel = <T extends Record<string, any>>(o: T) => {
    const n: Record<string, any> = {};
    if(Array.isArray(o)) {
      return o
    }

    if (o === Object(o)) {
      Object.keys(o)
        .forEach((k) => {
          n[toCamel(k)] = keysToCamel(o[k]);
        });

      return n;
    }

    return 0
};

export const deserialize = <T, K = unknown>(response: ExistingDocumentObject ) =>  {
  const result = fractalDeserializer<T>(response, { changeCase: CaseType.camelCase })
  const metaData = response.meta ? keysToCamel(response.meta) as K: null;

  return { result, metaData: metaData }
}