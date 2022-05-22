import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { BASE_URL, API_KEY } from "@/constants/baseConfig";
import { LinkInput, LinkResponse } from "@/lib/fetcher/fetcher";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AxiosResponse<LinkResponse>>
) {
  const url = req.body.url;
  const domain = req.body.domain;
  const tempRes = await axios
    .post<LinkInput, AxiosResponse<LinkResponse>>(
      `${BASE_URL}create`,
      {
        url,
        domain,
      },
      {
        headers: {
          Authorization: "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res: AxiosResponse<LinkResponse>) => {
      return res;
    });

  res.status(201).json(tempRes);
}
