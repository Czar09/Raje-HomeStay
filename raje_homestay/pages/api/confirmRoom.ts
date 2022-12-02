import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/Connection";
import sendMail from "./sendMail";

const reserveRooms =async (req: NextApiRequest, res: NextApiResponse) => {  

    const userDetails = req.body as {
        email: string;
        name: string;
        phoneNumber: string;
        checkInTimestamp: number;
        checkOutTimestamp: number;
        bookingTimestamp: number;
        numOfGuests: number;
        numOfRooms: number;
        roomType: string;
        price:string;
    };

    console.log("userDetails= ",userDetails);
    
    const status = 'CONFIRMED';
    let booking_transaction = await db.query("Insert Into public.booking_confirmation (email, name, phone_number, checkintimestamp, checkouttimestamp, booking_timestamp, num_of_guests, num_of_rooms, room_type, booking_status) Values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) Returning *", 
    [userDetails.email, userDetails.name, userDetails.phoneNumber, userDetails.checkInTimestamp, userDetails.checkOutTimestamp, userDetails.bookingTimestamp,  userDetails.numOfGuests, userDetails.numOfRooms, userDetails.roomType, status]);
    // sendMail(userDetails.email, userDetails.name, booking_date);
    res.status(200).json(booking_transaction);
}

export default(reserveRooms);