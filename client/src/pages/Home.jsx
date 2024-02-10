import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spin from '../components/Spinner'

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
                <div> <Link to='/book/creat'> fire </Link> </div>
                {loading ?
                   (
                        <table>
                            <thead>
                                <tr><th className='border border-slate-600 rounded-md'><h1>title</h1></th>
                                    <th className='border border-slate-600 rounded-md'><h1>author</h1></th>
                                    <th className='border border-slate-600 rounded-md'><h1>price</h1></th>
                                    <th className='border border-slate-600 rounded-md'><h1>category</h1></th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book, index) => {
                                    <tr>
                                        <td className='border border-slate-600 rounded-md text-center'>{index+1}</td>
                                        <td className='border border-slate-600 rounded-md text-center'>{book.title}</td>
                                        <td className='border border-slate-600 rounded-md text-center'>{book.author}</td>
                                        <td className='border border-slate-600 rounded-md text-center'>{book.price}</td>
                                        <td><div>
                                            <Link to={`/books/details/${book.id}`}>google</Link>
                                            </div></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    ) : (<Spin />)
                     }
            </div>
    )
}

export default Home