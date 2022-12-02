import {createClient} from 'next-sanity';
import createImageBuilder from '@sanity/image-url';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "bf01b9er" ,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
};

//connect to the sanity client
export const sanityClient = createClient(config);

export const urlFor  = (source: any) =>
    createImageBuilder(config).image(source);