import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/Connection";

type ResponseData = {
    maxRooms: number
  }

const checkPerson =async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {  

    const userDetails = req.body as {
        name:string;
    }
    JSON.stringify(userDetails);
    let booking_transaction = await db.query('Select count(*) from public.user_registration');
    let maxRoomsA= await db.query('Select max_rooms from public.rooms where name=$1',[userDetails.name])
    let max = parseInt(maxRoomsA[0].max_rooms);
    let max2 = parseInt(booking_transaction[0].count);
    console.log("booking_transaction count - ", max2-1, "Type of=",typeof(max2));
    res.status(200).send({maxRooms: max});

}

export default(checkPerson);