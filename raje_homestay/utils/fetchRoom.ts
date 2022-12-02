import { Room } from "../typing";

export const fetchRoom = async(id:string) =>{
    const url = new URL("/api/getRooms", `${process.env.NEXT_PUBLIC_BASE_URL}`)
    const res = await fetch(url);

    const data = await res.json();
    const rooms: Room[] = data.rooms;
    const room: Room = rooms.find((ele)=>ele.roomTypeId == id)!
    console.log("fetching");
    return room;
};