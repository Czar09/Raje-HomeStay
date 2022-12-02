import { GalleryImage } from "../typing";

export const fetchGallery = async() =>{
    const url = new URL("/api/getGallery", `${process.env.NEXT_PUBLIC_BASE_URL}`)
    const res = await fetch(url);

    const data = await res.json();
    const galleryImage: GalleryImage[] = data.galleryImage;
    console.log("fetching");
    return galleryImage;
};