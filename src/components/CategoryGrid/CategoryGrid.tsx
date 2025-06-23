import React from 'react';
import { Row, Col } from 'antd';
import CategoryCircle from '../CategoryCircle/CategoryCircle';
import type { CategoryCircleProps } from '../CategoryCircle/CategoryCircle';
import styles from './CategoryGrid.module.less';

interface CategoryGridProps {
  categories: CategoryCircleProps[];
  title?: string;
  subtitle?: string;
  columns?: { xs: number; sm: number; md: number; lg: number; xl: number };
  gutter?: [number, number];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  title,
  subtitle,
  columns = { xs: 3, sm: 4, md: 6, lg: 7, xl: 7 },
  gutter = [16, 32]
}) => {
  return (
    <div className={styles.categoryGridContainer}>
      {(title || subtitle) && (
        <div className={styles.sectionHeader}>
          {title && <h2 className={styles.sectionTitle}>{title}</h2>}
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>
      )}
      <Row gutter={gutter} justify="center" align="middle">
        {categories.map((category) => (
          <Col 
            key={category.id} 
            xs={24 / columns.xs} 
            sm={24 / columns.sm} 
            md={24 / columns.md} 
            lg={24 / columns.lg} 
            xl={24 / columns.xl}
            className={styles.categoryCol}
          >
            <CategoryCircle 
              id={category.id}
              image={category.image}
              name={category.name}
              url={category.url}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryGrid;
