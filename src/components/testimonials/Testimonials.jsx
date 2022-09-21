import React from "react";
import "./Testimonials.css";
import avr1 from "../../assets/avatar1.jpg";
import avr2 from "../../assets/avatar2.jpg";
import avr3 from "../../assets/avatar3.jpg";
import avr4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Jhone Snow",
      img: avr1,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores beatae libero quae dolores quidem deserunt. Dignissimos repellendus nemo vero expedita pariatur asperiores ea, impedit reiciendis, ab, laudantium aut dolores assumenda",
    },
    {
      id: 2,
      name: "Dragon Queen",
      img: avr2,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores beatae libero quae dolores quidem deserunt. Dignissimos repellendus nemo vero expedita pariatur asperiores ea, impedit reiciendis, ab, laudantium aut dolores assumenda",
    },
    {
      id: 3,
      name: "Arya Stark",
      img: avr3,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores beatae libero quae dolores quidem deserunt. Dignissimos repellendus nemo vero expedita pariatur asperiores ea, impedit reiciendis, ab, laudantium aut dolores assumenda",
    },
    {
      id: 4,
      name: "Tyrion Lanister",
      img: avr4,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores beatae libero quae dolores quidem deserunt. Dignissimos repellendus nemo vero expedita pariatur asperiores ea, impedit reiciendis, ab, laudantium aut dolores assumenda",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, name, img, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={img} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
