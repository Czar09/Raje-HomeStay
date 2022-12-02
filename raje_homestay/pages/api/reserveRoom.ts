import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/Connection";

const reserveRooms =async (req: NextApiRequest, res: NextApiResponse) => {  

    const userDetails = req.body as {
        checkInTimestamp: number;
        checkOutTimestamp: number;
        createTimestamp: number;
        expiryTimestamp: number;
        numOfRoom: number;
        roomType:string;
    };
    const status = 'INITIATED';
    let booking_transaction = await db.query("Insert Into public.booking_reservation (startdate, enddate, num_of_rooms, room_type, booking_status, expirytimestamp) Values ($1, $2, $3, $4, $5, $6) Returning *", 
    [ userDetails.checkInTimestamp, userDetails.checkOutTimestamp, userDetails.numOfRoom, userDetails.roomType, status, userDetails.expiryTimestamp]);
    res.status(200).json(booking_transaction);

}

export default(reserveRooms);