import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from 'next-sanity';
import { sanityClient } from "../../sanity";
import { Amenities } from "../../typing";


const query = groq`
    *[_type == 'amenities']
`

type Data = {
    amenities: Amenities[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const amenities: Amenities[] = await sanityClient.fetch(query);

    res.status(200).json({ amenities })
  }