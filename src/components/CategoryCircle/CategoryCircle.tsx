import React from 'react';
import styles from './CategoryCircle.module.less';

export interface CategoryCircleProps {
  id: string; // Used as a key in lists
  image: string;
  name: string;
  url: string;
}

const CategoryCircle: React.FC<CategoryCircleProps> = ({
  image,
  name,
  url
}) => {
  return (
    <a href={url} className={styles.categoryLink}>
      <div className={styles.categoryCircle}>
        <div className={styles.imageContainer}>
          <img 
            src={image} 
            alt={name} 
            className={styles.categoryImage}
          />
        </div>
        <h3 className={styles.categoryName}>{name}</h3>
      </div>
    </a>
  );
};

export default CategoryCircle;
