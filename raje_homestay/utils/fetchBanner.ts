import { BannerImage } from "../typing";

export const fetchBanner = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getBanner`);

    const data = await res.json();
    const bannerImage: BannerImage = data.bannerImage;

    return bannerImage;
};