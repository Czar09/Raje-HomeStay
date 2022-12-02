import { Room } from "../typing";

export const fetchRooms = async() =>{
    const res = await fetch(`https://demo-rajae-homestay.netlify.app/api/getRooms`);

    const data = await res.json();
    const rooms: Room[] = data.rooms;
    console.log("fetching");
    return rooms;
};