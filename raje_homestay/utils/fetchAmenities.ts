import { Amenities } from "../typing";

export const fetchAmenities = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAmenities`);
    const data = await res.json();
    const amenities: Amenities[] = data.amenities;
    console.log("fetching");
    return amenities;
};