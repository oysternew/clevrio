"use client";
import { TestimonialType } from "../../types";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateX from "../utils/DivAnimateX";
import DivAnimateY from "../utils/DivAnimateY";
type Props = {
  style?: string;
  testimonyData: TestimonialType[];
};
const TestimonySection2 = ({ style, testimonyData }: Props) => {
  return (
    <section className={`testi_area section-padding ${style} overflow-hidden`}>
      <div className="container">
        <DivAnimateX position={-60} className="section-title">
          <h2>
            What Student’s Say To Do <br />
            Their Online Course
          </h2>
        </DivAnimateX>
        <DivAnimateY className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <Swiper
              id="testimonial-slider2"
              className="owl-carousel"
              slidesPerView={2}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                991: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonyData.map((item: TestimonialType, index) => (
                <SwiperSlide className="testimonial" key={index}>
                  <img src="assets/img/quote.png" alt="" />
                  <div className="testimonial_content">
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <p>{item.testimony}</p>
                  </div>
                  <div className="testi_pic_title">
                    <img src={item.img.image} alt={item.img.alt} />
                    <h4>{item.name}</h4>
                    <p>{item.company}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </DivAnimateY>
      </div>
    </section>
  );
};

export default TestimonySection2;
