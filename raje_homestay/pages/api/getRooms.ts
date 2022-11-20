import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from 'next-sanity';
import { sanityClient } from "../../sanity";
import { Room } from "../../typing";


const query = groq`
    *[_type == 'room']
`

type Data = {
    rooms: Room[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const rooms: Room[] = await sanityClient.fetch(query);

    res.status(200).json({ rooms })
  }