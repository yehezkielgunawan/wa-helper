export type CountryCodeProps = {
  name: string;
  dial_code: string;
  code: string;
};

export const getCountryCodes = async (): Promise<Array<CountryCodeProps>> => {
  return await fetch("https://jsonkeeper.com/b/9NM9").then((response) =>
    response.json()
  );
};
