import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/Connection";

type ResponseData = {
    roomsAvailable: number
  }

const checkRoomsNumAvailability =async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {  

    const userDetails = req.body as {
        checkInTimestamp: number;
        checkOutTimestamp: number;
        createTimestamp: number;
        expiryTimeStamp: number;
        roomType:string;
    };

    const initiatedStatus = 'INITIATED';
    const confirmedStatus = 'CONFIRMED';

    let maxRoomsQueryRes = await db.query('Select max_rooms from public.rooms where name=$1',[userDetails.roomType])

    let maxRooms = parseInt(maxRoomsQueryRes[0].max_rooms);

    let booking_confirmation_query = await db.query('Select count(*) from public.booking_confirmation where booking_status=$1 AND ((checkintimestamp BETWEEN $2 AND $3) OR (checkouttimestamp BETWEEN $2 AND $3)) AND room_type=$4',[confirmedStatus, userDetails.checkInTimestamp, userDetails.checkOutTimestamp, userDetails.roomType]);

    let confirmedBooking = parseInt(booking_confirmation_query[0].count);

    let booking_reservation_query = await db.query("Select count(*) from public.booking_reservation where booking_status=$1 AND ((startdate BETWEEN $2 AND $3) OR (enddate BETWEEN $2 AND $3)) AND room_type=$4 AND expirytimestamp>$5",[initiatedStatus, userDetails.checkInTimestamp,userDetails.checkOutTimestamp, userDetails.roomType, userDetails.createTimestamp]);

    let reservedBooking = parseInt(booking_reservation_query[0].count);

    let roomsAvailable = maxRooms - (confirmedBooking+reservedBooking);

    res.status(200).send({roomsAvailable: roomsAvailable});
}

export default(checkRoomsNumAvailability);