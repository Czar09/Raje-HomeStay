

export const fetchBooking= async() =>{
    const res = await fetch(`https://demo-rajae-homestay.netlify.app/api/reserveRoom`);

    const status = await res.status;
    if(status == 200){

    }
    

    return ;
};