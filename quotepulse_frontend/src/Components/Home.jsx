import React from 'react'
import bg_img from '../assets/Images/bg-1.jpg'

const Home = () => {
  return (
    <>
    <div className="">
        <img src={bg_img} alt="Bg_image" className="w-full h-[100vh]"/>
    </div>
    <div className='absolute top-1/3 flex flex-col item-center justify-center w-full'>
        <div className="text-white text-[30px] flex justify-center items-center">
            <div className='w-2/5'>
                “Don’t walk in front of me… I may not follow
                Don’t walk behind me… I may not lead
                <br />Walk beside me… just be my friend”
            </div>
        </div>
    </div>
    </>
  )
}

export default Home