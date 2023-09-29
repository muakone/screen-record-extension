import React from 'react'
import Close from "../assets/close-circle.svg"

const SendPopUp = () => {
  return (
    <div className='mx-auto w-[280px] rounded-xl bg-white'>
        <div className="py-8 px-6">
            <div className="w-full flex">
                <img src={Close} alt="close" className='flex justify-end' />
            </div>
            <div className="my-6"></div>
        </div>
    </div>
  )
}

export default SendPopUp