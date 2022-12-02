import { GalleryImage } from "../typing";

export const fetchGallery = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getGallery`);

    const data = await res.json();
    const galleryImage: GalleryImage[] = data.galleryImage;
    console.log("fetching");
    return galleryImage;
};