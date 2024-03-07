import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

import Swiper from 'swiper';
import type { SwiperSlideProps, SwiperProps } from 'swiper/react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperProps,
        HTMLElement
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement
      >;
    }
  }
}

type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void };

export function SwiperContainer(props: SwiperProps) {
  const swiperRef = useRef<SwiperRef>(null);
  const {
    children,
    ...rest
  } = props;

  useEffect(() => {
    register();

    const params = {
      ...rest
    };

    if (swiperRef.current) {
      Object.assign(swiperRef.current, params);
      swiperRef.current.initialize();
    }
  }, []);

  useEffect(() => {
      setTimeout(() => {
        if (swiperRef.current) {
          swiperRef.current.swiper.update();
        }
      }, 100);
  }, [children]);

  return (
    <swiper-container
      init={false}
      ref={swiperRef}
    >
      {children}
    </swiper-container>
  );
}

export function SwiperSlide(props: SwiperSlideProps & { children: React.ReactNode }) {
  const {
    children,
    ...rest
  } = props;

  return (
    <swiper-slide {...rest}>
      {children}
    </swiper-slide>
  );
}

swiper react ts
