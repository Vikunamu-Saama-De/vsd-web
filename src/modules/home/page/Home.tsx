import styles from "./Home.module.less";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import SlideItem from "../components/slides/FirstSlide/SlideItem";
import ServicesBanner from "../components/ServicesBanner/ServicesBanner";

const Home = () => {
  const sliderItems = [
    {
      id: 1,
      image: "/slider/slide1.svg",
      title: "New Collection 2025",
      description: "Discover our latest fashion arrivals",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      image: "/slider/slide2.svg",
      title: "Summer Sale",
      description: "Up to 50% off on selected items",
      buttonText: "View Offers",
    },
    {
      id: 3,
      image: "/slider/slide3.svg",
      title: "Premium Quality",
      description: "Crafted with excellence and attention to detail",
      buttonText: "Learn More",
    },
  ];

  return (
    <div className={styles.homeContainer}>
      <HomeSlider>
        {sliderItems.map((item) => (
          <SlideItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
          />
        ))}
      </HomeSlider>
      <ServicesBanner />
    </div>
  );
};

export default Home;
