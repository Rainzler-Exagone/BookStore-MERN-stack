import { useParams } from 'react-router-dom';
import  axios  from 'axios';
import React, { useState,useEffect } from 'react' 
import BackButton from '../components/Backbutton'
import Spin from '../components/Spinner'
const  ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://localhost:5555/Books/${id}`)
        .then((res)=>{
            setBook(res.data);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(Error)
            setLoading(true)
        })
        },[])
    

    return (
        
         <>
                 <div className='flex justify-start'> <BackButton  /><h1 className='w-2/4'>Show Book</h1><div></div></div>
         <div className='p-4'>

            {loading ? (
                <Spin/>
            ):(
                <div className='flex flex-col'>
                    <div className='my-4'>
                        <span>{book.id}</span>
                    </div>
                    <div className='my-4'>
                        <span>title</span>
                        <span>{book.title}</span>
                    </div>
                    <div className='my-4'>
                        <span>author</span>
                        <span>{book.author}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 '>price</span>
                        <span>{book.price}</span>
                    </div>
                    <div className='my-4'>
                        <span>category</span>
                        <span>{book.category}</span>
                    </div>
                </div>
            )}
        </div>
         </>
        
        
    )
    }

export default ShowBook