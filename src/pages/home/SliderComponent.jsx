// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const SliderComponent = () => {
  return (
    <>
      <section>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://img.lazcdn.com/us/domino/b1cb000b-4df8-4c24-9f32-dc3405092184_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.lazcdn.com/us/domino/5b70bcb0-2872-48d4-a36a-62a55787a25c_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.lazcdn.com/us/domino/4d7d9bc3-ee65-4f1f-bce8-7e29fb01cccc_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.lazcdn.com/us/domino/67ad5a56-003b-491b-8eee-68a5d78ad670_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.lazcdn.com/us/domino/d5f064f5-faed-4d00-a8ed-80001466fc8c_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default SliderComponent;
