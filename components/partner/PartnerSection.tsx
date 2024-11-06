"use client";
import Link from "next/link";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateY from "../utils/DivAnimateY";
import { PartnerLogoType } from "@/types";
type Props = {
  style?: string;
  partnerData: PartnerLogoType[];
};
const PartnerSection = ({ style, partnerData }: Props) => {
  return (
    <div className={`partner-logo section-padding ${style} overflow-hidden`}>
      <div className="container">
        <DivAnimateY className="row part_bg g-2">
          <div className="col-md-4">
            <div className="partner_title">
              <h3>
                Helping <span>86,000+</span> global companies take the gloves
                off{" "}
              </h3>
            </div>
          </div>
          <div className="col-md-8 text-center">
            <Swiper
              className="partner"
              autoplay={true}
              slidesPerView={4}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay]}
            >
              {partnerData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link href="#">
                    <img src={item.img.image} alt={item.img.alt} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </DivAnimateY>
      </div>
    </div>
  );
};

export default PartnerSection;
