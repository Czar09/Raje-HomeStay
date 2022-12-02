import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db/Connection";

const deleteBooking =async (req: NextApiRequest, res: NextApiResponse) => {  

    const bookingDetails = req.body as {
        id:number;
    }

    let room_creation = await db.query('Delete from public.booking_confirmation where booking_id=$1', [bookingDetails.id]);

    res.status(200).json("Booking Deleted");
}

export default(deleteBooking);