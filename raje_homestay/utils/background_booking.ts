

export const fetchBooking= async() =>{
    const url = new URL('/api/reserveRoom',`${process.env.NEXT_PUBLIC_BASE_URL}`)
    const res = await fetch(url);

    const status = await res.status;
    if(status == 200){

    }
    

    return ;
};