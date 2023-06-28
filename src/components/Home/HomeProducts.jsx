import React, { useContext } from "react";
import useProductsView from "../../Hooks/useProductsView";
import { ProductsContext } from "../../store/ProductContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

const MobileSlider = ({ slides }) => {
  return (
    <Swiper
      modules={[Scrollbar]}
      className="w-[80%] lg:hidden"
      spaceBetween={1}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="w-[100%] sm:w-[80%] sm:ml-[50px] ">{slide}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const HomeProducts = () => {
  const productsData = useContext(ProductsContext);
  const showProducts = useProductsView(productsData, 3, "products", "/");

  return (
    <>
      <section className="flex flex-col items-center pt-12 pb-12 pl-4 pr-4 lg:pt-24 lg:pb-24 xl:pt-44 xl:pb-44">
        <h1 className="text-[1.5rem] font-medium text-center pt-3 pb-10 sm:text-[1.8rem] lg:text-[2.2rem]">
          Featured Products
        </h1>
        <MobileSlider slides={showProducts} />
        <div className="hidden lg:flex w-[100%] xl:w-[80%]">
          {showProducts.map((product, index) => (
            <div key={index} className="w-[100%]">
              {product}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeProducts;
