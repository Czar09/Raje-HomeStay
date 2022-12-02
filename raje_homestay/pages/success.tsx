import Router, { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type Props = {}

const Success = ({}: Props)=>{

    const router = useRouter();
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         router.push('/');
    //     },5000);
    // })
  return (
    <div className='h-screen bg-slate-300 items-center justify-center text-center'>
        <h1 className='text-green-500 text-4xl font-semibold p-60'>Payment Success!!! You&apos;ll be redirected to homepage soon</h1>
    </div>
  )
}

export default Success