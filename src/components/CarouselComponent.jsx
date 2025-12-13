// CarouselComponent.jsx
import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from '../assets/img/banner-1.png'; 
import banner2 from '../assets/img/banner-2.png';
import banner3 from '../assets/img/banner-3.png';

 

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1} 
          alt="First slide"
          style={{ height: 400 }}
        />
        {/* <Carousel.Caption style={{ 
          backgroundColor: 'rgba(248, 248, 248, 0.96)', 
          borderRadius: 'var(--border-radius)',
          padding: '1rem'
        }}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="First slide"
          style={{ height: 400 }}
        />
        {/* <Carousel.Caption style={{ 
          backgroundColor: 'rgba(248, 248, 248, 0.96)', 
          borderRadius: 'var(--border-radius)',
          padding: '1rem'
        }}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3} 
          alt="Second slide"
          style={{ height: 400 }}
        />
        {/* <Carousel.Caption style={{ 
          backgroundColor: 'rgba(248, 248, 248, 0.96)', 
          borderRadius: 'var(--border-radius)',
          padding: '1rem'
        }}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
