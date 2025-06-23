import styles from "./Home.module.less";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import SlideItem from "../components/slides/FirstSlide/SlideItem";
import ServicesBanner from "../components/ServicesBanner/ServicesBanner";
import ProductGrid from "../../../components/ProductGrid/ProductGrid";
import CategoryGrid from "../../../components/CategoryGrid/CategoryGrid";
import PromoGrid from "../../../components/PromoBanners/PromoGrid";
import type { ProductCardProps } from "../../../components/ProductCard/ProductCard";
import type { CategoryCircleProps } from "../../../components/CategoryCircle/CategoryCircle";
import type { PromoBannerProps } from "../../../components/PromoBanners/PromoBanner";

const Home = () => {
  // Sample promo banners data
  const promoBanners: PromoBannerProps[] = [
    {
      id: "mobile-promo",
      image: "/promos/mobile-phones.png",
      title: "MOBILE PHONES",
      description: "The latest smartphones with cutting-edge features",
      backgroundColor: "#514b6c",
      textColor: "#ffffff",
      url: "/category/mobile",
    },
    {
      id: "laptop-promo",
      image: "/promos/laptop.png",
      title: "Premium Laptops",
      subtitle: "NEW ARRIVALS",
      buttonText: "Shop Now",
      backgroundColor: "#f8e8dd",
      textColor: "#333333",
      url: "/category/laptops",
    },
    {
      id: "samsung-promo",
      image: "/promos/samsung.png",
      title: "SAMSUNG",
      subtitle: "EXCLUSIVE OFFER",
      description: "The Latest Range is Now Available",
      buttonText: "View Products",
      backgroundColor: "#f5f5f5",
      textColor: "#333333",
      url: "/brand/samsung",
    },
    {
      id: "washing-machine-promo",
      image: "/promos/washing-machine.png",
      title: "WASHING MACHINE",
      buttonText: "Shop Now",
      backgroundColor: "#1a365d",
      textColor: "#ffffff",
      url: "/category/appliances/washing-machines",
    },
    {
      id: "projector-promo",
      image: "/promos/projector.png",
      title: "SINGER LUMIO",
      subtitle: "NEW LAUNCH",
      description: "Portable Smart Projector",
      backgroundColor: "#f0f0f0",
      textColor: "#333333",
      url: "/products/singer-lumio-projector",
    },
  ];

  // Sample category data
  const topCategories: CategoryCircleProps[] = [
    {
      id: "mobile",
      image: "/categories/mobile.png",
      name: "Mobile",
      url: "/category/mobile",
    },
    {
      id: "cosmetics",
      image: "/categories/cosmetics.png",
      name: "Cosmetics",
      url: "/category/cosmetics",
    },
    {
      id: "electronics",
      image: "/categories/electronics.png",
      name: "Electronics",
      url: "/category/electronics",
    },
    {
      id: "furniture",
      image: "/categories/furniture.png",
      name: "Furniture",
      url: "/category/furniture",
    },
    {
      id: "watches",
      image: "/categories/watches.png",
      name: "Watches",
      url: "/category/watches",
    },
    {
      id: "decor",
      image: "/categories/decor.png",
      name: "Decor",
      url: "/category/decor",
    },
  ];

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
      <div className={styles.categorySection}>
        <CategoryGrid
          categories={topCategories}
          title="Shop From Top Categories"
          subtitle="Browse our most popular product categories"
        />
      </div>
      <div className={styles.productsSection}>
        <ProductGrid
          products={featuredProducts}
          title="Featured Products"
          subtitle="Explore our selection of premium laptops and electronics"
          columns={{ xs: 1, sm: 2, md: 2, lg: 4, xl: 4 }}
          onAddToCart={handleAddToCart}
        />
      </div>
      <div className={styles.promoSection}>
        <PromoGrid
          banners={promoBanners}
          title="Featured Collections"
          subtitle="Discover our exclusive collections and special offers"
          layout="mixed"
        />
      </div>
    </div>
  );
};

export default Home;
