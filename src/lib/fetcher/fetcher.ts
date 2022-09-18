import axios, { AxiosResponse } from "axios";

export type CountryCodeProps = {
  E164: string;
  phone_code: string;
  country_name: string;
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
  return axios
    .get("https://countrycode.dev/api/calls")
    .then((res: AxiosResponse<Array<CountryCodeProps>>) => {
      // Afghanistan is duplicated in that API (index 0 and 1), so we just take the array from index one to the latest.
      return res.data.slice(1);
    });
};

// Will send the request to the Next.js's API route.
export const shortenedURL = async (url: string, domain: string) => {
  return await axios
    .post<LinkInput, AxiosResponse<LinkResponse>>("/api/shorten", {
      url,
      domain,
    })
    .then((res: AxiosResponse<LinkResponse>) => {
      return res.data.data;
    });
};
