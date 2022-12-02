import { Social } from "../typing";

export const fetchAvailability = async() =>{
    const res = await fetch(`https://demo-rajae-homestay.netlify.app/api/checkRoomsNumAvailability`,{
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