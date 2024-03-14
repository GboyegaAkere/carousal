import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousal = () => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div>
        <Slider {...settings}>
          <div className='w-[50px] h-[110px] bg-red-800'>
            <div>
              <h3>hello where are you from</h3>
              <button>this is me </button>
              <p>i am not that bad na</p>
            </div>
          </div>
          <div className='w-[50px] h-[110px] bg-red-800'>
            <div>
              <h3>hello where are you from</h3>
              <button>this is me </button>
              <p>i am not that bad na</p>
            </div>
          </div>
          <div className='w-[50px] h-[110px] bg-red-800'>
            <div>
              <h3>hello where are you from</h3>
              <button>this is me </button>
              <p>i am not that bad na</p>
            </div>
          </div>
          <div className='w-[50px] h-[110px] bg-red-800'>
            <div>
              <h3>hello where are you from</h3>
              <button>this is me </button>
              <p>i am not that bad na</p>
            </div>
          </div>
          <div className='w-[50px] h-[110px] bg-red-800'>
            <div>
              <h3>hello where are you from</h3>
              <button>this is me </button>
              <p>i am not that bad na</p>
            </div>
          </div>
          <div className='w-[50px] h-[110px] bg-red-800'>
            <div>
              <h3>hello where are you from</h3>
              <button>this is me </button>
              <p>i am not that bad na</p>
            </div>
          </div>
          <div className='w-[50px] h-[110px] bg-red-800'>
            <div>
              <h3>hello where are you from</h3>
              <button>this is me </button>
              <p>i am not that bad na</p>
            </div>
          </div>
          <div className='w-[50px] h-[110px] bg-red-800'>
            <div>
              <h3>hello where are you from</h3>
              <button>this is me </button>
              <p>i am not that bad na</p>
            </div>
          </div>
          <div className='w-[50px] h-[110px] bg-red-800'>
            <div>
              <h3>hello where are you from</h3>
              <button>this is me </button>
              <p>i am not that bad na</p>
            </div>
          </div>
        </Slider>
      </div>
  )
}

export default Carousal