"use client";

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider,
} from "pure-react-carousel";

export function NewSlides({ children }: { children: React.ReactNode }) {
  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1.25}
      step={4}
      visibleSlides={4}
      totalSlides={9}
    >
      <div className="relative">
        <Slider>{children}</Slider>
        <ButtonBack className="absolute bg-white bottom-1/2 h-9 w-9 rounded-full translate-y-1/2 cursor-pointer border border-solid border-gray-200 -left-11	shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="mx-auto block"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
        </ButtonBack>
        <ButtonNext className="absolute bg-white bottom-1/2 h-9 w-9 rounded-full translate-y-1/2 cursor-pointer border border-solid border-gray-200 -right-11	shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="mx-auto block"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </svg>
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}
