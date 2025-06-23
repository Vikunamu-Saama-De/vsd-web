import React from 'react';
import { Button } from 'antd';
import styles from './PromoBanner.module.less';

export interface PromoBannerProps {
  id: string; // Used as a key in lists
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  url: string;
  backgroundColor?: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large';
  aspectRatio?: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  image,
  title,
  subtitle,
  description,
  buttonText,
  url,
  backgroundColor = '#f5f5f5',
  textColor = '#333',
  size = 'medium',
  aspectRatio = '16/9'
}) => {
  return (
    <a href={url} className={styles.bannerLink}>
      <div 
        className={`${styles.promoBanner} ${styles[size]}`}
        style={{ 
          backgroundColor,
          color: textColor,
          aspectRatio
        }}
      >
        <div className={styles.bannerContent}>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
          {buttonText && (
            <Button type="primary" className={styles.bannerButton}>
              {buttonText}
            </Button>
          )}
        </div>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.bannerImage} />
        </div>
      </div>
    </a>
  );
};

export default PromoBanner;
