import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-x5 text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How This Works?</p>
            <p>News Room</p>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
        </div>

        <div className='space-y-4 text-x5 text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Contact Us</p>
            <p>News Room</p>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
        </div>
    </div>
  )
}

export default Footer