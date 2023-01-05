import React, { useState, useRef, useCallback } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const items = [
  {
    id: "1",
    desc: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    image: "budi_photo.jpg",
    author: "Budi Sulaiman",
    role: "Palembang, South Sumatera",
  },
  {
    id: "2",
    desc: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    image: "watson_photo.jpg",
    author: "Amelia Watson",
    role: "New York, US",
  },
  {
    id: "3",
    desc: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    image: "karen_photo.jpg",
    author: "Karen Dutch",
    role: "Amsterdam, Netherland",
  },
];

export default function Testimonial() {
  const [realSlide, setRealSlide] = useState(0);
  const swiper = useRef();

  const fnPrev = useCallback(() => {
    if (realSlide > 0) swiper?.current?.slidePrev();
  }, [swiper, realSlide]);

  const fnNext = useCallback(() => {
    if (realSlide < items.length) swiper?.current?.slideNext();
  }, [swiper, realSlide]);

  return (
    <section className="mb-28">
      <div className="max-w-full lg:max-w-7xl mx-auto relative px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12 px-0 lg:pl-8 lg:pr-20">
            <div className="flex flex-col mb-16">
              <h3 className="text-lg mb-2 text-gray-500">Testimonials</h3>
              <h3 className="font-serif text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug mb-10">
                What people say about Us.
              </h3>
              <ul className="flex gap-x-6">
                {items.map((item, i) => {
                  return (
                    <li
                      key={item.id}
                      className={[
                        "w-2 h-2 rounded-full",
                        i === realSlide ? "bg-gray-800" : "bg-gray-300",
                      ].join(" ")}
                      onClick={() =>
                        i !== realSlide && swiper?.current?.slideTo(i)
                      }
                    ></li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-6/12 flex items-center justify-center relative h-[360px] lg:h-auto">
            <div className="absolute -inset-4 lg:-inset-10 lg:-top-20 ">
              <Swiper
                // install Swiper modules
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  Autoplay,
                  EffectCreative,
                ]}
                spaceBetween={50}
                slidesPerView={1}
                effect="creative"
                creativeEffect={{
                  prev: {
                    translate: [60, 70, 0],
                  },
                  next: {
                    translate: ["-100%", "-100%", 0],
                  },
                }}
                simulateTouch={false}
                onSlideChange={(s) => setRealSlide(s.realIndex)}
                onSwiper={(s) => {
                  swiper.current = s;
                }}
              >
                {items.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="relative px-12 lg:px-32 pt-10 lg:pt-20 pb-48">
                        <div className="relative">
                          <div className="bg-white shadow-great rounded-xl p-6 relative z-20">
                            <span className="w-12 h-12 absolute top-0 left-0 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 rounded-full flex-none mr-3">
                              <Image
                                layout="responsive"
                                width="100%"
                                className="object-cover"
                                height="100%"
                                src={`/images/${item.image}`}
                                alt="Testimonial Photo"
                              />
                            </span>
                            <p className="text-gray-500 mb-8">{item.desc}</p>
                            <h6 className="text-gray-900 text-lg">
                              {item.author}
                            </h6>
                            <h6 className="text-gray-500 text-sm">
                              {item.role}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="hidden lg:flex w-full lg:w-1/12 items-center justify-center">
            <div className="flex flex-col">
              <button
                onClick={fnPrev}
                className={[
                  realSlide === 0 ? "text-gray-300" : "text-gray-800",
                ].join(" ")}
              >
                <span className="material-icons mr-2">keyboard_arrow_up</span>
              </button>
              <button
                onClick={fnNext}
                className={[
                  realSlide === items.length - 1
                    ? "text-gray-300"
                    : "text-gray-800",
                ].join(" ")}
              >
                <span className="material-icons mr-2">keyboard_arrow_down</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
