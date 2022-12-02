import { Amenities } from "../typing";

export const fetchAmenities = async() =>{
    const url = new URL("/api/getAmenities",`${process.env.NEXT_PUBLIC_BASE_URL}`)
    const res = await fetch(url);
    const data = await res.json();
    const amenities: Amenities[] = data.amenities;
    console.log("fetching");
    return amenities;
};