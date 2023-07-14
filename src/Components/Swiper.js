import React from 'react';
import '../Styles/Swiper.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Row, Col } from 'react-bootstrap';

import s1 from './images/img_1.jpg';
import s2 from './images/img_2.jpg';
import s3 from './images/img_3.jpg';
import s4 from './images/img_4.jpg';
import s5 from './images/img_5.jpg';
import s6 from './images/img_6.jpg';
import s7 from './images/img_7.jpg';

function Swiper() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <div className="carousel">
      <Slider {...settings}>
      <div className='box'>
        <Col xs={8} md={8}>
          <Image src={s1} thumbnail fluid/>
        </Col>
      </div>
      <div className='box'>
        <Col xs={8} md={8}>
          <Image src={s2} thumbnail fluid/>
        </Col>
      </div>
      <div className='box'>
        <Col xs={8} md={8}>
          <Image src={s3} thumbnail fluid/>
        </Col>
      </div>
      <div className='box'>
        <Col xs={8} md={8}>
          <Image src={s4} thumbnail fluid/>
        </Col>
      </div>
      <div className='box'>
        <Col xs={8} md={8}>
          <Image src={s5} thumbnail fluid/>
        </Col>
      </div>
      <div className='box'>
        <Col xs={8} md={8}>
          <Image src={s6} thumbnail fluid/>
        </Col>
      </div>
      <div className='box'>
        <Col xs={8} md={8}>
          <Image src={s7} thumbnail fluid/>
        </Col>
      </div>
      </Slider>
    </div>
  );
}

export default Swiper;