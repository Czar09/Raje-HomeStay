import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/Connection";
import sendMail from "./sendMail";

const reserveRooms =async (req: NextApiRequest, res: NextApiResponse) => {  

    const userDetails = req.body as {
        email: string;
        name: string;
        phoneNumber: string;
        checkInTimestamp: EpochTimeStamp;
        checkOutTimestamp: EpochTimeStamp;
        bookingTimestamp: EpochTimeStamp;
        numOfGuests: string;
        numOfDays: string;
        numOfRooms: string;
        roomType: string;
    };
    const status = 'CONFIRMED';
    let booking_transaction = await db.query('InsertInto public.booking_confirmation (email, name, phone_number, checkInTimestamp, checkOutTimestamp, bookingTimestamp, numOfGuests, numOfDays, numOfRooms, roomType, booking_status) Values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) Returning *', 
    [userDetails.email, userDetails.name, userDetails.phoneNumber, userDetails.checkInTimestamp, userDetails.checkOutTimestamp, userDetails.bookingTimestamp,  userDetails.numOfGuests, userDetails.numOfDays, userDetails.numOfRooms, userDetails.roomType, status]);
    let booking_date = moment(userDetails.checkInTimestamp).format('DD/MM/YYYY');
    sendMail(userDetails.email, userDetails.name, booking_date);
    res.status(200);
}

export default(reserveRooms);