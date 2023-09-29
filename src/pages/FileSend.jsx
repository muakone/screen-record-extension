import React from 'react'
import LogoTitle from "../assets/logo-title.svg";
import Edit from "../assets/edit.svg";
import Copy from "../assets/copy.svg";
import FaceBook from "../assets/Facebook.svg"
import Whatsapp from "../assets/whatsapp.svg"
import Telegram from "../assets/telegram.svg"

const FileSend = () => {
  return (
    <div className='container'>
        <div className="my-5 mx-20">
            <nav className='my-8 flex justify-between'>
                <img src={LogoTitle} alt="logo-title" className='w-40' />
                <div className="flex gap-x-8 font-medium">
                    <p>Features</p>
                    <p>How it works</p>
                </div>
                <p className="text-[#120B48] font-semibold">Get Started</p>
            </nav>
            <div className="flex w-full my-16">
                <div className="w-1/2 grid pr-20 border-r">
                    <h2 className='my-3 font-bold text-4xl text-start'>
                        Your video is ready!
                    </h2>
                    <div className="my-6 w-full">
                        <p>Name</p>
                        <div className="flex gap-x-6 items-center">
                            <p className='text-2xl font-semibold text-[#413C6D]'>AAAAAAggggggg</p>
                            <img src={Edit} alt="edit" className='-mb-3' />
                        </div>
                        <div className="mt-16 mb-8 bg-[#E7E7ED] px-5 py-2 flex items-center rounded-xl w-full">
                            <input type="email" placeholder='enter email of reciever' className='bg-transparent w-[90%] text-[#434343]/80' />
                            <button className='py-1.5 px-4 bg-[#605C84] text-[#FFFFFF] rounded-lg'>Send</button>
                        </div>
                        <div className="my-8">
                            <p className='text-[20px] font-medium'>Video Url</p>
                            <div className="my-2 bg-[#FAFAFA] px-3 py-2 flex items-center rounded-xl w-full border-[0.5px] border-[#929292]">
                            <p className='w-[90%] text-[#434343]/80'>https://localhost:3000 </p>
                            <div className="flex items-center gap-x-2 border border-[#120B48] py-1 px-4 rounded-lg">
                                <img src={Copy} alt="copy" width={"20px"} />
                                <p>copy</p>
                            </div>
                        </div>
                        <div className="mt-16">
                            <p className='my-2 font-semibold'>Share your video</p>
                            <div className="flex gap-x-3">
                            <div className="flex items-center gap-x-2 px-2 py-2 border border-[#0A0628] rounded">
                                <img src={FaceBook} alt="facebook" />
                                <p className='text-[#08051E] font-medium'>Facebook</p>
                            </div>
                            <div className="flex items-center gap-x-2 px-2 py-2 border border-[#0A0628] rounded">
                                <img src={Whatsapp} alt="facebook" />
                                <p className='text-[#08051E] font-medium'>Whatsapp</p>
                            </div>
                            <div className="flex items-center gap-x-2 px-2 py-2 border border-[#0A0628] rounded">
                                <img src={Telegram} alt="facebook" />
                                <p className='text-[#08051E] font-medium'>Telegram</p>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default FileSend