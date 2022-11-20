import { Room } from "../typing";

export const fetchRoom = async(id:string) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getRooms`);

    const data = await res.json();
    const rooms: Room[] = data.rooms;
    const room: Room = rooms.find((ele)=>ele.roomTypeId == id)!
    console.log("fetching");
    return room;
};