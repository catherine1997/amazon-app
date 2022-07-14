import React, { Component } from "react";
import Slider from "react-slick";
import photo from "../../../src/components/images/laptop.jpeg";
import photo2 from '../../../src/components/images/camera.jpeg';
import photo3 from '../../../src/components/images/game.jpeg';
import photo4 from '../../../src/components/images/fashion.jpeg';


export default class CardSlider extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 7000,
    };
    return (
        <div>
      <div class="rounded-lg shadow-md">
       
        <Slider {...settings}>
          <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
          <div class="flex flex-wrap justify-center">
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo} alt="image" class="h-20 m-10 "/> 
             </div>
        
             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo2} alt="image" class="h-20 m-10"/>
             </div>
        

             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo3} alt="image" class="h-20 m-10"/>

             </div>
         
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo4} alt="image" class="h-20 m-10"/>
             </div>
        
              </div>
                </div>
          <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
          <div class="flex flex-wrap justify-center">
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo} alt="image" class="h-20 m-10 "/> 
             </div>
        
             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo2} alt="image" class="h-20 m-10"/>
             </div>
        

             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo3} alt="image" class="h-20 m-10"/>

             </div>
         
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo4} alt="image" class="h-20 m-10"/>
             </div>
        
              </div>
                </div>
        <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
          <div class="flex flex-wrap justify-center">
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo} alt="image" class="h-20 m-10 "/> 
             </div>
        
             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo2} alt="image" class="h-20 m-10"/>
             </div>
        

             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo3} alt="image" class="h-20 m-10"/>

             </div>
         
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo4} alt="image" class="h-20 m-10"/>
             </div>
        
              </div>
                </div>
                <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
            <div class="flex flex-wrap justify-center">
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo} alt="image" class="h-20 m-10 "/> 
             </div>
        
             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo2} alt="image" class="h-20 m-10"/>
             </div>
        

             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo3} alt="image" class="h-20 m-10"/>

             </div>
         
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo4} alt="image" class="h-20 m-10"/>
             </div>
        
              </div>
                 </div>
                 <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
          <div class="flex flex-wrap justify-center">
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo} alt="image" class="h-20 m-10 "/> 
             </div>
        
             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo2} alt="image" class="h-20 m-10"/>
             </div>
        

             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo3} alt="image" class="h-20 m-10"/>

             </div>
         
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo4} alt="image" class="h-20 m-10"/>
             </div>
        
              </div>
                </div>
                <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
          <div class="flex flex-wrap justify-center">
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo} alt="image" class="h-20 m-10 "/> 
             </div>
        
             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo2} alt="image" class="h-20 m-10"/>
             </div>
        

             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo3} alt="image" class="h-20 m-10"/>

             </div>
         
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo4} alt="image" class="h-20 m-10"/>
             </div>
        
               </div>
                 </div>
        </Slider>
      </div>

      <div class="rounded-lg shadow-md">
       
        <Slider {...settings}>
          <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
          <div class="flex flex-wrap justify-center">
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo} alt="image" class="h-20 m-10 "/> 
             </div>
        
             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo2} alt="image" class="h-20 m-10"/>
             </div>
        

             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo3} alt="image" class="h-20 m-10"/>

             </div>
         
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo4} alt="image" class="h-20 m-10"/>
             </div>
        
              </div>
                </div>
          <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
          <div class="flex flex-wrap justify-center">
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo} alt="image" class="h-20 m-10 "/> 
             </div>
        
             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo2} alt="image" class="h-20 m-10"/>
             </div>
        

             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo3} alt="image" class="h-20 m-10"/>

             </div>
         
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo4} alt="image" class="h-20 m-10"/>
             </div>
        
              </div>
                </div>
        <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
          <div class="flex flex-wrap justify-center">
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo} alt="image" class="h-20 m-10 "/> 
             </div>
        
             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo2} alt="image" class="h-20 m-10"/>
             </div>
        

             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo3} alt="image" class="h-20 m-10"/>

             </div>
         
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo4} alt="image" class="h-20 m-10"/>
             </div>
        
              </div>
                </div>
                <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
            <div class="flex flex-wrap justify-center">
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo} alt="image" class="h-20 m-10 "/> 
             </div>
        
             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo2} alt="image" class="h-20 m-10"/>
             </div>
        

             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo3} alt="image" class="h-20 m-10"/>

             </div>
         
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo4} alt="image" class="h-20 m-10"/>
             </div>
        
              </div>
                 </div>
                 <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
          <div class="flex flex-wrap justify-center">
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo} alt="image" class="h-20 m-10 "/> 
             </div>
        
             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo2} alt="image" class="h-20 m-10"/>
             </div>
        

             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo3} alt="image" class="h-20 m-10"/>

             </div>
         
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo4} alt="image" class="h-20 m-10"/>
             </div>
        
                 </div>
                   </div>
            <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
              <div class="flex flex-wrap justify-center">
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo} alt="image" class="h-20 m-10 "/> 
             </div>
        
             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo2} alt="image" class="h-20 m-10"/>
             </div>
        

             <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo3} alt="image" class="h-20 m-10"/>

             </div>
         
             <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                 <img src={photo4} alt="image" class="h-20 m-10"/>
             </div>
        
               </div>
                 </div>
        </Slider>
      </div>


      <div class="flex flex-wrap justify-center">
      <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5">computer acccessories</h2>
                 <img src={photo} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        

        
             <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5">computer acccessories</h2>
                 <img src={photo2} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        

             <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5">computer acccessories</h2>
                 <img src={photo3} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        

         
             <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5" >computer acccessories</h2>
                 <img src={photo4} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        
         </div>

         
         <div class="rounded-lg shadow-md">
       
       <Slider {...settings}>
         <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
         <div class="flex flex-wrap justify-center">
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo} alt="image" class="h-20 m-10 "/> 
            </div>
       
            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo2} alt="image" class="h-20 m-10"/>
            </div>
       

            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo3} alt="image" class="h-20 m-10"/>

            </div>
        
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo4} alt="image" class="h-20 m-10"/>
            </div>
       
             </div>
               </div>
         <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
         <div class="flex flex-wrap justify-center">
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo} alt="image" class="h-20 m-10 "/> 
            </div>
       
            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo2} alt="image" class="h-20 m-10"/>
            </div>
       

            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo3} alt="image" class="h-20 m-10"/>

            </div>
        
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo4} alt="image" class="h-20 m-10"/>
            </div>
       
             </div>
               </div>
       <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
         <div class="flex flex-wrap justify-center">
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo} alt="image" class="h-20 m-10 "/> 
            </div>
       
            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo2} alt="image" class="h-20 m-10"/>
            </div>
       

            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo3} alt="image" class="h-20 m-10"/>

            </div>
        
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo4} alt="image" class="h-20 m-10"/>
            </div>
       
             </div>
               </div>
               <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
           <div class="flex flex-wrap justify-center">
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo} alt="image" class="h-20 m-10 "/> 
            </div>
       
            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo2} alt="image" class="h-20 m-10"/>
            </div>
       

            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo3} alt="image" class="h-20 m-10"/>

            </div>
        
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo4} alt="image" class="h-20 m-10"/>
            </div>
       
             </div>
                </div>
                <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
         <div class="flex flex-wrap justify-center">
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo} alt="image" class="h-20 m-10 "/> 
            </div>
       
            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo2} alt="image" class="h-20 m-10"/>
            </div>
       

            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo3} alt="image" class="h-20 m-10"/>

            </div>
        
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo4} alt="image" class="h-20 m-10"/>
            </div>
       
                </div>
                  </div>
           <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
             <div class="flex flex-wrap justify-center">
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo} alt="image" class="h-20 m-10 "/> 
            </div>
       
            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo2} alt="image" class="h-20 m-10"/>
            </div>
       

            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo3} alt="image" class="h-20 m-10"/>

            </div>
        
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo4} alt="image" class="h-20 m-10"/>
            </div>
       
              </div>
                </div>
       </Slider>
     </div>


     <div class="flex flex-wrap justify-center">
      <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5">computer acccessories</h2>
                 <img src={photo} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        

        
             <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5">computer acccessories</h2>
                 <img src={photo2} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        

             <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5">computer acccessories</h2>
                 <img src={photo3} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        

         
             <div class="flex flex-col bg-white rounded-lg shadow-md w-96 m-6 overflow-hidden sm:w-52">
             <h2 class="text-center text-bold px-2 pb-5  pt-3.5" >computer acccessories</h2>
                 <img src={photo4} alt="image" class="h-20 m-10"/>
                 <a href="#" class=" text-blue-800 p-3 sm:text-left float-left hover-bg-blue-800 transition-all duration-500">Shop Now</a>
             </div>
        
         </div>

         
         <div class="rounded-lg shadow-md">
       
       <Slider {...settings}>
         <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
         <div class="flex flex-wrap justify-center">
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo} alt="image" class="h-20 m-10 "/> 
            </div>
       
            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo2} alt="image" class="h-20 m-10"/>
            </div>
       

            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo3} alt="image" class="h-20 m-10"/>

            </div>
        
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo4} alt="image" class="h-20 m-10"/>
            </div>
       
             </div>
               </div>
         <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
         <div class="flex flex-wrap justify-center">
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo} alt="image" class="h-20 m-10 "/> 
            </div>
       
            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo2} alt="image" class="h-20 m-10"/>
            </div>
       

            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo3} alt="image" class="h-20 m-10"/>

            </div>
        
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo4} alt="image" class="h-20 m-10"/>
            </div>
       
             </div>
               </div>
       <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
         <div class="flex flex-wrap justify-center">
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo} alt="image" class="h-20 m-10 "/> 
            </div>
       
            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo2} alt="image" class="h-20 m-10"/>
            </div>
       

            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo3} alt="image" class="h-20 m-10"/>

            </div>
        
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo4} alt="image" class="h-20 m-10"/>
            </div>
       
             </div>
               </div>
               <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
           <div class="flex flex-wrap justify-center">
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo} alt="image" class="h-20 m-10 "/> 
            </div>
       
            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo2} alt="image" class="h-20 m-10"/>
            </div>
       

            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo3} alt="image" class="h-20 m-10"/>

            </div>
        
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo4} alt="image" class="h-20 m-10"/>
            </div>
       
             </div>
                </div>
                <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
         <div class="flex flex-wrap justify-center">
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo} alt="image" class="h-20 m-10 "/> 
            </div>
       
            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo2} alt="image" class="h-20 m-10"/>
            </div>
       

            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo3} alt="image" class="h-20 m-10"/>

            </div>
        
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo4} alt="image" class="h-20 m-10"/>
            </div>
       
                </div>
                  </div>
           <div class="bg-white h-48 m-6 max-w-screen-lg sm:w-52">
             <div class="flex flex-wrap justify-center">
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo} alt="image" class="h-20 m-10 "/> 
            </div>
       
            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo2} alt="image" class="h-20 m-10"/>
            </div>
       

            <div class="flex flex-col bg-white  w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo3} alt="image" class="h-20 m-10"/>

            </div>
        
            <div class="flex flex-col bg-white w-96 m-6 overflow-hidden sm:w-52">
                <img src={photo4} alt="image" class="h-20 m-10"/>
            </div>
       
              </div>
                </div>
       </Slider>
     </div>
      
      </div>
    );
  }
}