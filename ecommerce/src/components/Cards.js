import React from 'react';

const Cards = ({item, handleClick }) => {
    const { id,title, desc, img} = item;

  return (
    <div className='cards'>
        <div className='image_box'>
            <img src = {img} alt="" class="w-96 m-6 sm:w-52 "/>
        </div>
        <div className='details'>
            <p>{id}</p>
            <p>{title}</p>
            <p>{desc}</p>

            
            <button onClick= {() => handleClick( item)}>Add to Cart</button>
        </div>
    </div>

  )
}

export default Cards