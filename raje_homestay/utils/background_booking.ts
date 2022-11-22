

export const fetchBooking= async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/reserveRoom`);

    const status = await res.status;
    if(status == 200){

    }
    

    return ;
};