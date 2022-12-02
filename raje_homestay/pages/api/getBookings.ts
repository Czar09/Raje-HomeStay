import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/Connection";



const getRooms = async (req: NextApiRequest, res: NextApiResponse) => {  

    let maxRoomsA= await db.query('Select * from public.booking_confirmation');
    res.status(200).json(maxRoomsA);

}

export default(getRooms);