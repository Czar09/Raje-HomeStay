import { BannerImage } from "../typing";

export const fetchBanner = async() =>{
    const url = new URL("/api/getBanner", `${process.env.NEXT_PUBLIC_BASE_URL}`)
    const res = await fetch(url);

    const data = await res.json();
    const bannerImage: BannerImage = data.bannerImage;

    return bannerImage;
};