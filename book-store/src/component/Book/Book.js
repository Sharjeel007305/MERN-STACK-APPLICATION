import React from 'react';
import { Button } from '@mui/material';
import "./Book.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const  Book = (props) => {
    const history = useNavigate();

    const {_id,name,author,description,price,image} = props.book;

    const deleteHandler = async () => {
     await axios
     .delete(`url ${_id}`)
      .then((res) => res.data)
      .then(() =>  history("/"))
      .then(()=> history("/books"));
    };

  return (
    <div className="card">
        <img  src ={image} alt={name}/> 
        <article> By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h3> Rs {price}</h3>
        <Button LinkComponent={Link} to={`/books/${_id}`} sm={{mt: 'auto'}} > Update</Button>
        <Button onClick={deleteHandler} sm={{mt: 'auto'}} > Delete</Button>
    </div>
  )
}

export default Book