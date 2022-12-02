import { Room } from "../typing";

export const fetchRooms = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getRooms`);

    const data = await res.json();
    const rooms: Room[] = data.rooms;
    console.log("fetching");
    return rooms;
};