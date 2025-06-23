import { Button } from 'antd';
import styles from './SlideItem.module.less';

// Define the type for slider items
export interface SlideItemProps {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

const SlideItem = ({ image, title, description, buttonText }: SlideItemProps) => {
  return (
    <div className={styles.sliderItem}>
      <div 
        className={styles.sliderImage}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.sliderContent}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Button type="primary" size="large" className={styles.actionButton}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
