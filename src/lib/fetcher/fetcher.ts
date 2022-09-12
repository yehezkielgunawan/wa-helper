import axios, { AxiosResponse } from "axios";

import { BASE_URL, API_KEY } from "@/constants/baseConfig";

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
  return await axios
    .get("https://countrycode.dev/api/calls")
    .then((res: AxiosResponse<Array<CountryCodeProps>>) => res.data);
};

export const shortenedURL = async (url: string, domain: string) => {
  return await axios
    .post<LinkInput, AxiosResponse<LinkResponse>>(
      `${BASE_URL}create`,
      {
        url,
        domain,
      },
      {
        headers: {
          Authorization: "Bearer " + API_KEY,
        },
      }
    )
    .then((res: AxiosResponse<LinkResponse>) => {
      return res.data.data;
    });
};
