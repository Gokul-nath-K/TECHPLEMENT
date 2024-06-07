import React, { useEffect, useState } from 'react'
import bg_img from '../assets/Images/bg-1.jpg'
import { getAll } from '../Services/api';

const AuthorPgae = () => {

    const [authors, setAuthors] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    let handleChange = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setSearchInput(lowerCase);
        console.log(lowerCase);
    };

    const filteredData = authors.filter((el) => {
        if (searchInput === "") {
        return authors;
        } else {
        return el.author.toLowerCase().includes(searchInput);
        }
    });

    const getAuthor = async () => {
        const response = await getAll();
        setAuthors(response.data);
    }
    useEffect(() => {
        getAuthor();
    }, [])
  return (
    <>
    <div className="">
        <img src={bg_img} alt="Bg_image" className="w-full h-[100vh]"/>
    </div>
    <div className='absolute top-[15%] flex flex-col justify-center w-full'>
        <form className="flex items-center w-2/5 mx-auto">   
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                </div>
                <input 
                    type="text" 
                    onChange={handleChange} 
                    id="simple-search" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Search author name..." 
                    required 
                />
            </div>
            <button className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <span className="sr-only">Search</span>
                search
            </button>
        </form>
    </div>
    <div className='flex justify-center'>

        <div className='absolute top-[25%] h-[75%] flex flex-col justify-center w-[80%]'>
            <div className='m-4 h-full overflow-scroll no-scrollbar' id='author_display'>
                <div className='grid grid-cols-4'>
                        {
                            filteredData && filteredData.map((a) => {
                                return (
                                    <>
                                    <div key={a.id} className='bg-gray-600 rounded-[8px] shadow-xl h-[50px] w-[250px] m-5'> 
                                        <p className='h-full flex items-center font-bold text-zinc-100 justify-center '>{ a.author }</p>
                                    </div>
                                    </>
                                )
                            }
                            )
                        }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AuthorPgae