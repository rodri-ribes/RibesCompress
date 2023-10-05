import React from "react";
import style from "./Carousel.module.scss";
import ImageCard from "../ImageCard/ImageCard";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

// import "./CarouselHome.scss";

export default function Carousel({
  images,
  information,
  setFiles,
  files,
  options,
}) {
  return (
    <Swiper
      className={style.container}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      navigation={true}
      pagination={false}
      scrollbar={{ draggable: true }}
      autoplay={false}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "@0.50": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.25": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        "@1.75": {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}>
      {images?.map((p) => {
        return (
          <SwiperSlide key={v4()}>
            <ImageCard
              img={p}
              options={options}
              information={information}
              setFiles={setFiles}
              files={files}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
