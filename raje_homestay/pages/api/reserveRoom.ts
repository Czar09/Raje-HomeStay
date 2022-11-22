import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/Connection";

const reserveRooms =async (req: NextApiRequest, res: NextApiResponse) => {  

    const userDetails = req.body as {
        createTimestamp: string;
        expiryTimeStamp: string;
        numOfGuests: string;
        numOfDays: string;
        numOfRooms: string;
        roomType:string;
    };
    const status = 'INITIATED';


    let booking_transaction = await db.query('InsertInto public.booking_reservation (startDate, endDate, numOfGuests, numOfDays, numOfRooms, roomType, booking_status) Values ($1, $2, $3, $4, $5, $6, $7) Returning *', 
    [ userDetails.createTimestamp, userDetails.expiryTimeStamp, userDetails.numOfGuests, userDetails.numOfDays, userDetails.numOfRooms, userDetails.roomType, status]);

    res.status(200).json(booking_transaction);

}

export default(reserveRooms);