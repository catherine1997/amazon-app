import './header.css';
import React, { useEffect, useState}from 'react';
import '../../global.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai'
import Navbar from '../Navbar/Navbar';
// import Amazon from '../Amazon';
// import Cart from '../Cart';

const Header = () => {
  // const [show, setShow] = useState(true);

  // const[cart, setCart] =useState([]);

  // const handleClick = (item) => {
  //    setCart({...cart, item});
  // };
  
  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind.amount] = 1;
  //   setCart([...arr]);
  // };

  // useEffect(() => {
  //   console.log("cart change")
  // }, [cart]);

  return (
    <div className="App" >
      <nav class="flex items-center justify-between flex-wrap bg-black p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <div>
            <a href="#" class="inline-block font-bold px-4 py-2 leading-none text-white border-white hover:border-white mt-4 lg:mt-0 " >Amazon</a>
          </div>

          <div>
            <a href="#" class="inline-block text-thick-bold px-4 py-2 leading-none text-white border-white hover:border-white  mt-4 lg:mt-0"><p class="font-light">Deliver to<MdOutlineLocationOn /> </p><h1 class="font-bold">Nigeria</h1></a>
          </div>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>amazon</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>

        <form class="flex items-center">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" class=" max-w-40 bg-gray-500 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-black-500 w-96 mt-6 mb-4  focus:border-gray-500 block pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-gray-500" placeholder="Search" required />
          </div>
          <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-orange-400 rounded-lg border border-brown-700 hover:bg-brown-800 focus:ring-4 focus:outline-none focus:ring-brown-300 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-blue-800"><svg class="w-3 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        </form>

        <div>
          <a href="#" class="inline-block text-thick-bold px-4 py-2 leading-none text-white border-white hover:border-white  mt-4 lg:mt-0"><p1>Returns</p1><h1 class="text-bold">& Orders</h1></a>
        </div>


        <div > 
          <a href="#" class="inline-flex space-x-2 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent  mt-4 lg:mt-0" ><AiOutlineShoppingCart /> <span>0</span><p >Cart</p></a>
        </div>
      </nav>


      <Navbar />
      
    
    
      
    </div>

  );
}

export default Header;



