import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

// We can no longer use the environment variables in `constants`, as the
// environment variables are now on the server, not the browser.
const API_KEY = process.env.TINYURL_API_KEY;
const BASE_URL = "https://api.tinyurl.com/";

type LinkFailureResponse = {
  message: string;
};

type LinkSuccessResponse = {
  data: LinkContent;
  code: number;
  errors?: Array<string>;
};

type LinkContent = {
  url: string;
  domain: string;
  alias: string;
  tags: Array<string>;
  tiny_url: string;
};

export const runtime = "experimental-edge";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LinkFailureResponse | LinkSuccessResponse>
) {
  // Destructure our request body.
  const { domain, url } = req.body;

  // Wrap in `try-catch`, in case we encountered errors on the network or on the server.
  try {
    // Make an API call to tinyurl's API.
    const { data: response } = await axios.post<LinkSuccessResponse>(
      `${BASE_URL}create`,
      { url, domain },
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );

    // Send response to the client.
    res.status(200).json(response);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
      return;
    }

    res.status(500).json({
      message:
        "Unexpected error encountered when attempting to do the action. Please try again!",
    });
  }
}
