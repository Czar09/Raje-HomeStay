import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from 'next-sanity';
import { sanityClient } from "../../sanity";
import { GalleryImage } from "../../typing";


const query = groq`
    *[_type == 'galleryImage']
`

type Data = {
    galleryImage: GalleryImage[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const galleryImage: GalleryImage[] = await sanityClient.fetch(query);

    res.status(200).json({ galleryImage })
  }