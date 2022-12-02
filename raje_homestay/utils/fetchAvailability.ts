import { Social } from "../typing";

export const fetchAvailability = async() =>{
    const url = new URL("/api/checkRoomsNumAvailability", `${process.env.NEXT_PUBLIC_BASE_URL}`)
    const res = await fetch(url,{
        method:'GET',
        headers: {
            'Content-type': 'application/json'
        },
    });

    const data = await res.json();
    const socials: Social[] = data.socials;
    console.log("fetching");
    return socials;
};