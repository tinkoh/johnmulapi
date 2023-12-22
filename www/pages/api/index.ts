import type { NextApiRequest, NextApiResponse } from "next";
import { fetch, Response } from "../../../server/routes";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const api_response = fetch();

  res.status(api_response.status).json(api_response);
}
