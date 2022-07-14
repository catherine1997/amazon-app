import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import photo4 from '../../../src/components/images/fashion.jpeg';
import photo5 from '../../../src/components/images/desk1.jpeg';
import photo6 from '../../../src/components/images/desk2.jpeg';


export default class SimpleSlider extends Component {
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

        <Slider {...settings}>
          <div> 
            <h3><img src={photo6} alt="text" class=" h-50 w-screen"/></h3>
          </div>
          <div>
            <h3><img src={photo6} alt="text" class=" h-66 w-screen "/></h3>
          </div>
          <div>
            <h3><img src={photo5} alt="text" class=" h-66 w-screen " /></h3>
          </div>
          <div>
            <h3><img src={photo5} alt="text" class=" h-66 w-screen " /></h3>
          </div>
          <div>
            <h3><img src={photo6} alt="text" class=" h-66 w-screen " /></h3>
          </div>
          <div>
            <h3><img src={photo6} alt="text" class=" h-66 w-screen "/></h3>
          </div>
        </Slider>
      </div>
    );
  }
}