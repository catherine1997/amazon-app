import React, { }from "react";
import photo from '../../../src/components/images/laptop.jpeg';
import photo2 from '../../../src/components/images/camera.jpeg';
import photo3 from '../../../src/components/images/game.jpeg';
import photo4 from '../../../src/components/images/fashion.jpeg';


// import {image} from '../CarouselData';
// import {MdArrowBackIosNew} from 'react-icons/md';
// import {IoIosArrowForward} from 'react-icons/io';
import CardSlider from "../Slider/CardSlider";




function Carousel () {
  
    return(
        <div>
     <div class="w-full min-h-screen bg-white-50">
         <h1 class="font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">Check <span class="text-red-800">Out Our</span>Features</h1>
         <div class="flex flex-wrap justify-center">
             <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5 pt-3.5 font-bold">computer acccessories</h2>
                 <img src={photo} alt="image" class="h-20 m-10 "/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        

        
             <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5 font-bold">computer acccessories</h2>
                 <img src={photo2} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        

             <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5 font-bold">computer acccessories</h2>
                 <img src={photo3} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        

         
             <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5 font-bold">computer acccessories</h2>
                 <img src={photo4} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left  float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        
         </div>

         <div class="flex flex-wrap justify-center">
         <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5 font-bold">computer acccessories</h2>
                 <img src={photo} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3  sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        

        
             <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5 font-bold">computer acccessories</h2>
                 <img src={photo2} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        

             <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5 font-bold">computer acccessories</h2>
                 <img src={photo3} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        

         
             <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5 font-bold">computer acccessories</h2>
                 <img src={photo4} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
         </div>
         <CardSlider />

    </div>
    </div>
        
       
    )

}

export default Carousel;