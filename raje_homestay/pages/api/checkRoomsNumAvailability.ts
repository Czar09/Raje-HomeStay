import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/Connection";


type ResponseData = {
    roomsAvailable: number
  }


const checkRoomsNumAvailability =async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {  

    const userDetails = req.body as {
        checkInTimestamp: EpochTimeStamp;
        checkOutTimestamp: EpochTimeStamp;
        createTimestamp: EpochTimeStamp;
        expiryTimeStamp: EpochTimeStamp;
        numOfGuests: string;
        roomType:string;
    };
    const initiatedStatus = 'INITIATED';
    const confirmedStatus = 'CONFIRMED';
    // let maxRoomsQueryRes = await db.query('Select max_rooms from public.rooms where name=$1',[userDetails.roomType])
    // console.log(maxRoomsQueryRes);
    // let maxRooms = parseInt(maxRoomsQueryRes[0].max_rooms);
    let booking_confirmation_query = await db.query('Select count(*) from public.booking_confirmation where booking_status=$1 AND (checkintimestamp<=$2 AND checkouttimestamp>=$3) AND room_type=$4',[confirmedStatus, userDetails.checkOutTimestamp, userDetails.checkInTimestamp, userDetails.roomType]);
    console.log("Booking= ",booking_confirmation_query);
    let confirmedBooking = parseInt(booking_confirmation_query[0].count);
    // let booking_reservation_query = await db.query('Select count(*) from public.booking_reservation where booking_status=$1 AND (checkInTimestamp<=$2 AND checkoutTimestamp>=$3) AND roomType=$4 AND expiryTimestamp>$5 ',[initiatedStatus, userDetails.checkInTimestamp, userDetails.checkOutTimestamp, userDetails.roomType, userDetails.expiryTimeStamp]);
    // let reservedBooking = parseInt(booking_reservation_query[0].count);
    // let roomsAvailable = maxRooms - (confirmedBooking+reservedBooking);

    res.status(200).send({roomsAvailable: confirmedBooking});
}

export default(checkRoomsNumAvailability);