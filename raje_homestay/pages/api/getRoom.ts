import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/Connection";



const getRoom =async (req: NextApiRequest, res: NextApiResponse<>) => {  

    const userDetails = req.body as {
        name:string;
    }
    JSON.stringify(userDetails);
    let rooms = await db.query('Select * from public.rooms');
    res.status(200).json(rooms);

}

export default(getRoom);