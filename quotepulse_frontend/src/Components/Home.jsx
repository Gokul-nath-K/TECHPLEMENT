import React, { useEffect } from 'react'
import bg_img from '../assets/Images/bg-1.jpg'
import { useState } from "react" 
import { getRandomQuotes } from "../Services/api";


const Home = () => {

    const [quotes, setQuotes] = useState({
        quote : '',
        author : ''
    });

    useEffect(() => {
        
        getQuotes();
        const interval = setInterval(() => {
            getQuotes();
        }, 5000);
    }, [])

    const getQuotes = () => {

        try {
            getRandomQuotes().then((res) => setQuotes(res.data));
        }
        catch (err) {

        }
        console.log(quotes);
    }

  return (
    <>
    <div className="">
        <img src={bg_img} alt="Bg_image" className="w-full h-[100vh]"/>
    </div>
    <div className='absolute top-1/3 flex flex-col item-center justify-center w-full'>
        <div className="flex justify-center items-center">
            <div className='w-1/2'>
            <p className='text-white text-[30px] font-bold'>
                { quotes.quote }
            </p>
            <p className='font-serif text-white text-[15px] py-5 flex justify-end'>
                - { quotes.author}
            </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home