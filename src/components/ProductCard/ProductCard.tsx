import React from 'react';
import { Card, Button, Badge, Tooltip } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from './ProductCard.module.less';

export interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  sku: string;
  price: number;
  currency?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
  discount?: number;
  onAddToCart?: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  sku,
  price,
  currency = 'Rs.',
  isNew = false,
  isFeatured = false,
  isOnSale = false,
  discount = 0,
  onAddToCart
}) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(id);
    }
  };

  // Format price with commas for Indian numbering system (e.g., 1,00,000)
  const formatPrice = (price: number): string => {
    return price.toLocaleString('en-IN');
  };

  // Calculate discounted price if applicable
  const discountedPrice = isOnSale && discount > 0 
    ? price - (price * (discount / 100)) 
    : null;

  return (
    <Card 
      className={styles.productCard}
      cover={
        <div className={styles.imageContainer}>
          {isNew && <Badge.Ribbon text="NEW" color="#E41E2C" className={styles.newBadge} />}
          {isFeatured && <Badge.Ribbon text="FEATURED" color="#1890ff" className={styles.featuredBadge} placement="start" />}
          {isOnSale && <Badge.Ribbon text={`${discount}% OFF`} color="#52c41a" className={styles.saleBadge} />}
          <img 
            alt={title} 
            src={image} 
            className={styles.productImage}
          />
        </div>
      }
      bodyStyle={{ padding: '12px' }}
    >
      <div className={styles.skuContainer}>
        <span className={styles.sku}>{sku}</span>
      </div>
      <Tooltip title={title}>
        <h3 className={styles.productTitle}>{title}</h3>
      </Tooltip>
      <div className={styles.priceContainer}>
        {discountedPrice ? (
          <>
            <span className={styles.originalPrice}>
              {currency} {formatPrice(price)}
            </span>
            <span className={styles.discountedPrice}>
              {currency} {formatPrice(discountedPrice)}
            </span>
          </>
        ) : (
          <span className={styles.price}>
            {currency} {formatPrice(price)}
          </span>
        )}
        <Button 
          type="primary"
          shape="circle"
          icon={<ShoppingCartOutlined />}
          className={styles.cartButton}
          onClick={handleAddToCart}
          aria-label="Add to cart"
        />
      </div>
    </Card>
  );
};

export default ProductCard;
