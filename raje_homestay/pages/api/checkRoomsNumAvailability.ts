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
        numOfGuests: number;
        roomType:string;
    };
    console.log(userDetails);
    const initiatedStatus = 'INITIATED';
    const confirmedStatus = 'CONFIRMED';
    let maxRoomsQueryRes = await db.query('Select max_rooms from public.rooms where name=$1',[userDetails.roomType])
    let maxRooms = parseInt(maxRoomsQueryRes[0].max_rooms);
    let booking_confirmation_query = await db.query('Select count(*) from public.booking_confirmation where booking_status=$1 AND (checkintimestamp<=to_timestamp($2) AND checkouttimestamp>=to_timestamp($3)) AND room_type=$4 AND num_of_guests=$5',[confirmedStatus, userDetails.checkOutTimestamp, userDetails.checkInTimestamp, userDetails.roomType, userDetails.numOfGuests]);
    let confirmedBooking = parseInt(booking_confirmation_query[0].count);
    let booking_reservation_query = await db.query('Select count(*) from public.booking_reservation where booking_status=$1 AND (startdate<=to_timestamp($2) AND enddate>=to_timestamp($3)) AND room_type=$4 AND expirytimestamp>to_timestamp($5) AND num_of_guests=$6 ',[initiatedStatus, userDetails.checkInTimestamp, userDetails.checkOutTimestamp, userDetails.roomType, userDetails.expiryTimeStamp, userDetails.numOfGuests]);
    let reservedBooking = parseInt(booking_reservation_query[0].count);
    let roomsAvailable = maxRooms - (confirmedBooking+reservedBooking);

    res.status(200).send({roomsAvailable: roomsAvailable});
}

export default(checkRoomsNumAvailability);