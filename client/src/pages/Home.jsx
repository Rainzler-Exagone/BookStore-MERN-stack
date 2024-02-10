import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spin from '../components/Spinner'
import { IoMdCreate } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleSharp } from "react-icons/io5"


const Home = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:5555/Books')
            .then((res) => {
                setBooks(res.data.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(Error)
            })
    }, [])

    return (

        <div>
            {/* <div> <Link to='/books/create'> fire </Link> </div> */}
            {loading ?
                
                (<Spin />):(
                    <table className='mt-20'>
                        <thead>
                            <tr><th className='border border-slate-600 rounded-md px-5 '><h1>title</h1></th>
                                <th className='border border-slate-600 rounded-md px-5'><h1>author</h1></th>
                                <th className='border border-slate-600 rounded-md px-5'><h1>price</h1></th>
                                <th className='border border-slate-600 rounded-md px-5'><h1>category</h1></th>
                                <th className='border border-slate-600 rounded-md px-5'><h1>Operations</h1></th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, index) => (
                                <tr key={book.id}  className='h-8'>
                                    <td className='border border-slate-600 rounded-md text-center px-5'>{book.title}</td>
                                    <td className='border border-slate-600 rounded-md text-center px-5'>{book.author}</td>
                                    <td className='border border-slate-600 rounded-md text-center px-5'>{book.price}</td>
                                    <td className='border border-slate-600 rounded-md text-center px-5'>{book.category}</td>
                                    <td className='flex border border-slate-600 rounded-md py-5  text-center px-5'>
                                        <Link to={`/books/edit/${book.id}`} ><IoMdCreate/></Link>
                                        <Link to={`/books/details/${book.id}`}><BsInfoCircle/></Link>
                                        <Link to={`/books/delete/${book.id}`}><MdDelete/></Link>
                                    </td>
                                </tr> 

                            ))}
                            <td><Link><IoAddCircleOutline/></Link></td>
                            
                        </tbody>
                    </table>
                ) 
            }
        </div>
    )
}

export default Home