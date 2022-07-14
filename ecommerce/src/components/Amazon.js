import React from 'react';
import  { useState } from 'react';
import image from '../components/data';
import Cards from '../components/Cards'
import '../components/Amazon.css'; 
const Amazon = ({handleClick}) => {

   
  return (
    <section>
        {image.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick}/>))}
    </section>
  )
}

export default Amazon;