import { Social } from "../typing";

export const fetchSocials = async() =>{
    const url = new URL("/api/getSocials", `${process.env.NEXT_PUBLIC_BASE_URL}`)
    const res = await fetch(url);

    const data = await res.json();
    const socials: Social[] = data.socials;
    console.log("fetching");
    return socials;
};