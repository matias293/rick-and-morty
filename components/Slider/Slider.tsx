import React, {useRef} from "react";
import Slider from "react-slick";
import styles from "../../styles/Slider.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type HeroProp = {
    id: number;
    src: string
    alt: string
  }

const SimpleSlider= ( props: { images: HeroProp[] }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1 ,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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

        <div className={styles.containerSlider}>
        <Slider {...settings}>
            {props.images.map((item) => (
                <div className={styles.img} key={item.id}>
                    <img src={item.src}  alt={item.alt} />
                </div>
                ))}
         </Slider>
       
        </div>

      );
    }

export default SimpleSlider;