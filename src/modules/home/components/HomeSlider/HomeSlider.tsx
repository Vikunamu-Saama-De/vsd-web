import { Carousel, Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import type { ReactNode } from "react";
import type { CarouselRef } from "antd/es/carousel";
import styles from "./HomeSlider.module.less";

// Define props for the HomeSlider component
interface HomeSliderProps {
  children: ReactNode;
  autoplay?: boolean;
  effect?: 'scrollx' | 'fade';
}

const HomeSlider = ({ children, autoplay = true, effect = "fade" }: HomeSliderProps) => {
  const carouselRef = useRef<CarouselRef>(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <Carousel
        ref={carouselRef}
        autoplay={autoplay}
        effect={effect}
        className={styles.carousel}
      >
        {children}
      </Carousel>
      <div className={styles.sliderControls}>
        <Button
          className={styles.sliderControl}
          icon={<ArrowLeftOutlined />}
          onClick={prevSlide}
        />
        <Button
          className={styles.sliderControl}
          icon={<ArrowRightOutlined />}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default HomeSlider;
