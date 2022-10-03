import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookDetails = () => {
    const [Updateinputs, setUpdatetinput] = useState({});
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const  history =useNavigate();

    useEffect(() => {
        const fetchHandler = async() => {
            await axios.get(`url${id}`
            ).then((res) => res.data).then(data => setUpdatetinput(data.book));
        };
        fetchHandler().then((data) => setUpdatetinput(data.book));
    },[id]);

    const sendRequest = async() => {
        await axios.put(`url ${id}`,{
            name: String(Updateinputs.name),
            author: String(Updateinputs.author),
            description: String(Updateinputs.description),
            price: Number(Updateinputs.price),
            image: String(Updateinputs.image),
            available: Boolean(checked)
        }).then(res => res.data)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history("/books") );
    };

    const handleChange = (e) => {
        setUpdatetinput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
          }))
    };


  return (
    <div>
    {Updateinputs && (
         <form onSubmit={handleSubmit}>
      <Box 
      display="flex" 
      flexDirection ="column" 
      justifyContent={"center"} 
      maxWidth={700}
      alignContent={"center"}
      alignSelf ="center"
      marginLeft={"auto"}
      marginRight={"auto"}
      marginTop = {10}
      >
      <FormLabel>Name</FormLabel>
      <TextField 
      value = {Updateinputs.name} 
      onChange={handleChange}
      margin='normal' 
      fullWidth 
      variant='outlined'
       name='name' 
       />
      <FormLabel>Author</FormLabel>
      <TextField 
      value = {Updateinputs.author} 
      onChange={handleChange}
      margin='normal' 
      fullWidth
       variant='outlined' 
       name='author'
        />
      <FormLabel>Description</FormLabel>
      <TextField 
      value = {Updateinputs.description} 
      onChange={handleChange}
      margin='normal' 
      fullWidth 
      variant='outlined' 
      name='description' />
      <FormLabel>Price</FormLabel>
      <TextField 
       value = {Updateinputs.price} 
       onChange={handleChange}
       type = "number" 
       margin='normal'
      fullWidth
      variant='outlined' 
       name='price' />
      <FormLabel>Image</FormLabel>
      <TextField 
        value = {Updateinputs.image} 
        onChange={handleChange}
       margin='normal'
      fullWidth 
      variant='outlined' name='image' />
      <FormControlLabel 
        control={
        <Checkbox checked={checked} onChange={()=> setChecked(!checked)}
        />} 
        label="Available" 
        />
      <Button variant="contained" type="submit">Update Book</Button>
      </Box>
      
    </form>
    )}
    </div>
  )
}

export default BookDetails
