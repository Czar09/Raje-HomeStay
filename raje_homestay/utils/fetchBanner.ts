import { BannerImage } from "../typing";

export const fetchBanner = async() =>{
    const res = await fetch(`https://demo-rajae-homestay.netlify.app/api/getBanner`);

    const data = await res.json();
    const bannerImage: BannerImage = data.bannerImage;

    return bannerImage;
};