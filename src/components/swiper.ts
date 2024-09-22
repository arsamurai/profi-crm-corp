import Swiper from "swiper"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const swipers = {
  reviewsSwiper: () =>
    new Swiper(".reviews-swiper", {
      slidesPerView: 1.05,
      spaceBetween: 12,
      modules: [Pagination, Navigation],
      pagination: {
        el: ".reviews-swiper-pagination.swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".reviews-swiper-button-next.swiper-button-next",
        prevEl: ".reviews-swiper-button-prev.swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1100: {
          slidesPerView: 3,
        },
      },
    }),
  integrationsSwiper: () =>
    new Swiper(".integrations-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      modules: [Pagination, Navigation],
      pagination: {
        el: ".integrations-swiper-pagination.swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".integrations-swiper-button-next.swiper-button-next",
        prevEl: ".integrations-swiper-button-prev.swiper-button-prev",
      },
    }),
  blogSwiper: () =>
    new Swiper(".blog-swiper", {
      slidesPerView: 1,
      spaceBetween: 28,
      modules: [Pagination, Navigation],
      pagination: {
        el: ".blog-swiper-pagination.swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".blog-swiper-button-next.swiper-button-next",
        prevEl: ".blog-swiper-button-prev.swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    }),
}
window.addEventListener("load", () => {
  swipers.reviewsSwiper()
  swipers.integrationsSwiper()
  swipers.blogSwiper()
})
