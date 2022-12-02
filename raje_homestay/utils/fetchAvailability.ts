import { Social } from "../typing";

export const fetchAvailability = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkRoomsNumAvailability`,{
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