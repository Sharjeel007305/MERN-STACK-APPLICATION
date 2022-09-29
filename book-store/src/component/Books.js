import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = "http://localhost:5000/books";


const fetchHandler = async () => {
    await axios.get(URL).then((res)=> res.data)
}

const  Books = () => {
    const [books, setBooks] = useState()
    useEffect(() => {
        fetchHandler().then(data => setBooks(data))
    }, [] )
    console.log(books)
  return (
    <div>All Books are her</div>
  )
}

export default Books