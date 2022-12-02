import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/Connection";

const createRoom =async (req: NextApiRequest, res: NextApiResponse) => {  

    const roomDetails = req.body as {
        id:number;
        name:string;
        max_guests:string;
        max_rooms:string;
    }

    JSON.stringify(roomDetails);
    let room_creation = await db.query('Insert into public.rooms (id, name, max_guests, max_rooms) values ($1, $2, $3, $4) returning *', [roomDetails.id, roomDetails.name, roomDetails.max_guests, roomDetails.max_rooms]);
    res.status(200).json("Room Created");

}

export default(createRoom);