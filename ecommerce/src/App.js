// import logo from './logo.svg';
import './App.css';
import React, {} from 'react';
import '../src/global.css';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import {MdOutlineLocationOn} from 'react-icons/md';
// import {GiHamburgerMenu} from 'react-icons/gi';
import Header from './components/header/header';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import SimpleSlider from './components/Slider/SimpleSlider';
// import Amazon from './components/Amazon';
// import Cart from './components/Cart';


function App() {
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
  return (
    <div className="App" >
<Header />
<SimpleSlider />
<Carousel /> 

<div>
<Footer />
</div>
  </div>

  );
}

export default App;

