import { Amenities } from "../typing";

export const fetchAmenities = async() =>{
    const res = await fetch(`https://demo-rajae-homestay.netlify.app/api/getAmenities`);
    const data = await res.json();
    const amenities: Amenities[] = data.amenities;
    console.log("fetching");
    return amenities;
};