import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from 'next-sanity';
import { sanityClient } from "../../sanity";
import { BannerImage } from "../../typing";


const query = groq`
    *[_type == 'bannerImage'][0]
`;

type Data = {
    bannerImage: BannerImage;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const bannerImage: BannerImage = await sanityClient.fetch(query);

    res.status(200).json({ bannerImage })
  }