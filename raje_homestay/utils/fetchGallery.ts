import { GalleryImage } from "../typing";

export const fetchGallery = async() =>{
    const res = await fetch(`https://demo-rajae-homestay.netlify.app/api/getGallery`);

    const data = await res.json();
    const galleryImage: GalleryImage[] = data.galleryImage;
    console.log("fetching");
    return galleryImage;
};