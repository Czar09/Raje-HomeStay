import { Room } from "../typing";

export const fetchRooms = async() =>{
    const url = new URL("/api/getRooms", `${process.env.NEXT_PUBLIC_BASE_URL}`)
    const res = await fetch(url);

    const data = await res.json();
    const rooms: Room[] = data.rooms;
    console.log("fetching");
    return rooms;
};