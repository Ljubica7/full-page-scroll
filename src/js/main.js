import "../styles/style.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const getGsapScrollDown = (fullPage) => {
  const numOfSlides = +fullPage.dataset.numberofslides;
  const slide = document.querySelector(".outer");
  const end = slide.offsetHeight * numOfSlides - slide.offsetHeight;

  gsap.timeline({
    scrollTrigger: {
      trigger: slide,
      pin: true,
      anticipatePin: 1,
      start: "center center",
      end: `+=${end}`,
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true,
    },
  });

  for (var i = 0; i < numOfSlides; i++) {
    const start = slide.offsetHeight * i;
    const translateY = slide.offsetHeight * i * -1;
    const inner = document.querySelector(".inner");

    gsap.timeline({
      scrollTrigger: {
        trigger: inner,
        start: `top+=${start} center`,
        end: `+=${slide.offsetHeight}`,
        // markers: true,
        invalidateOnRefresh: true,

        onEnter: () =>
          gsap.to(inner, {
            translateY,
            duration: 0.4,
            opacity: 1,
          }),
        onEnterBack: () =>
          gsap.to(inner, {
            translateY,
            duration: 0.4,
          }),
      },
    });
  }
};

const fullPage = document.querySelector(".full-page-scroll");
if (fullPage) {
  getGsapScrollDown(fullPage);
}
