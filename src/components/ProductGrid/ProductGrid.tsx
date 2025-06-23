import React from 'react';
import { Row, Col } from 'antd';
import ProductCard from '../ProductCard/ProductCard';
import type { ProductCardProps } from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.less';

interface ProductGridProps {
  products: Omit<ProductCardProps, 'onAddToCart'>[];
  title?: string;
  subtitle?: string;
  columns?: { xs: number; sm: number; md: number; lg: number; xl: number };
  gutter?: [number, number];
  onAddToCart?: (id: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  title,
  subtitle,
  columns = { xs: 1, sm: 2, md: 3, lg: 4, xl: 4 },
  gutter = [16, 24],
  onAddToCart
}) => {
  const handleAddToCart = (id: string) => {
    if (onAddToCart) {
      onAddToCart(id);
    }
  };

  return (
    <div className={styles.productGridContainer}>
      {(title || subtitle) && (
        <div className={styles.sectionHeader}>
          {title && <h2 className={styles.sectionTitle}>{title}</h2>}
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>
      )}
      <Row gutter={gutter}>
        {products.map((product) => (
          <Col 
            key={product.id} 
            xs={24 / columns.xs} 
            sm={24 / columns.sm} 
            md={24 / columns.md} 
            lg={24 / columns.lg} 
            xl={24 / columns.xl}
            className={styles.productCol}
          >
            <ProductCard 
              {...product} 
              onAddToCart={handleAddToCart}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductGrid;
