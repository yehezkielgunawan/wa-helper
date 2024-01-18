export type CountryCodeProps = {
  code: string;
  dial_code: string;
  name: string;
};

export type LinkResponse = {
  data: LinkContent;
  code: number;
  errors?: Array<string>;
};

export type LinkContent = {
  url: string;
  domain: string;
  alias: string;
  tags: Array<string>;
  tiny_url: string;
};

export type LinkInput = {
  url: string;
  domain: string;
};

export const getCountryCodes = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/yehezkielgunawan/country-call-code/main/db.json"
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: Array<CountryCodeProps> = await response.json();
  // Afghanistan is duplicated in that API (index 0 and 1), so we just take the array from index one to the latest.
  return data.slice(1);
};
