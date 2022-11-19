import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from 'next-sanity';
import { sanityClient } from "../../sanity";
import { RoomInfo } from "../../typing";


const query = groq`
    *[_type == 'roomInfo'][0]
`;

type Data = {
    roomInfo: RoomInfo;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const roomInfo: RoomInfo = await sanityClient.fetch(query);

    res.status(200).json({ roomInfo })
  }