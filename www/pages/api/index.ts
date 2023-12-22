import type { NextApiRequest, NextApiResponse } from "next";
import fetch, { Response } from "../../../quotes/fetch";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const api_response = fetch();

  res.status(api_response.status).json(api_response);
}
