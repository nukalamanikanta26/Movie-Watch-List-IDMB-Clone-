import React, { useState } from 'react'
import genreids from '../utility/genre'

function Watchlist({watchlist}) {
const[search, setSearch] =useState('')

let handleSearch =(e) => {
setSearch(e.target.value)
}

    return (
        <>
        <div className='flex justify-center my-4'> 
           <input onChange={handleSearch}  value={search} type='text' placeholder='Search Movies Here..' className='p-3 h-[3rem] w-[18rem] bg-gray-200 outline-none'/>
        </div>
        <div className='overflow-hidden rounded-lg border border-gray-200'>
            <table className='w-full text-gray-500 text-center'>
                <thead className='border-b-2'>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Popularity</th>
                        <th>Genre</th>
                    </tr>

                </thead>
                <tbody>

                {watchlist.filter((movieObj)=>{
                    return movieObj.title.toLowerCase().includes(search.toLowerCase())

                }
                ).map((movieObj)=>{
                    return <tr className='border-b-2'>
                        <td className='flex items-center px-6 py-4'>
                            <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/w500${movieObj.backdrop_path}`} alt="" />
                            <div className='mx-10'>{movieObj.title}</div>
                        </td>
                        <td>{movieObj.vote_average
}</td>
                        <td>{movieObj.popularity
}</td>
                        <td>{genreids[movieObj.genre_ids
[0]]}</td>
                        <td className='text-red-700'>Delete</td>
                    </tr>
                })}
                
                    

                </tbody>
            </table>
        </div>
        </>
    )
}

export default Watchlist
