import { Social } from "../typing";

export const fetchSocials = async() =>{
    const res = await fetch(`https://demo-rajae-homestay.netlify.app/api/getSocials`);

    const data = await res.json();
    const socials: Social[] = data.socials;
    console.log("fetching");
    return socials;
};