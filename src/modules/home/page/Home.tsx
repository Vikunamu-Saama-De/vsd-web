import styles from "./Home.module.less";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import SlideItem from "../components/slides/FirstSlide/SlideItem";
import ServicesBanner from "../components/ServicesBanner/ServicesBanner";
import ProductGrid from "../../../components/ProductGrid/ProductGrid";
import type { ProductCardProps } from "../../../components/ProductCard/ProductCard";

const Home = () => {
  // Sample featured products data
  const featuredProducts: Omit<ProductCardProps, "onAddToCart">[] = [
    {
      id: "as-flip-14g",
      image: "/products/laptop1.png",
      title: "ASUS Vivobook 14 Flip, TP3407SA-QL062WS - 14t...",
      sku: "AS-FLIP-14G-U7-IT-062-GRY",
      price: 559999,
      isNew: true,
    },
    {
      id: "hp-pavilion",
      image: "/products/laptop2.png",
      title: "HP Pavilion 15, Core i7 12th Gen - 16GB RAM",
      sku: "HP-PAV-15-i7-16GB-512",
      price: 489999,
      isFeatured: true,
    },
    {
      id: "dell-xps-13",
      image: "/products/laptop3.png",
      title: "Dell XPS 13, Intel Core i5, 8GB RAM, 512GB SSD",
      sku: "DL-XPS-13-i5-8GB",
      price: 429999,
      isOnSale: true,
      discount: 10,
    },
    {
      id: "macbook-air",
      image: "/products/laptop4.png",
      title: "Apple MacBook Air M2 Chip, 8GB RAM, 256GB SSD",
      sku: "AP-MBA-M2-8GB-256",
      price: 699999,
    },
  ];

  const handleAddToCart = (id: string) => {
    console.log(`Added product ${id} to cart`);
    // Implement actual cart functionality here
  };

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
      <div className={styles.productsSection}>
        <ProductGrid
          products={featuredProducts}
          title="Featured Products"
          subtitle="Explore our selection of premium laptops and electronics"
          columns={{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4 }}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default Home;
