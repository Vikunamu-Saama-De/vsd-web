import { Row, Col } from 'antd';
import { 
  ShopOutlined, 
  StarOutlined, 
  GlobalOutlined, 
  CustomerServiceOutlined 
} from '@ant-design/icons';
import styles from './ServicesBanner.module.less';

interface StatItem {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const ServicesBanner = () => {
  const stats: StatItem[] = [
    {
      icon: <ShopOutlined className={styles.statIcon} />,
      title: 'Products Sold',
      value: '10,500+'
    },
    {
      icon: <StarOutlined className={styles.statIcon} />,
      title: 'Quality Brands',
      value: '85+'
    },
    {
      icon: <GlobalOutlined className={styles.statIcon} />,
      title: 'Store Locations',
      value: '240'
    },
    {
      icon: <CustomerServiceOutlined className={styles.statIcon} />,
      title: 'Happy Customers',
      value: '147K+'
    }
  ];

  return (
    <div className={styles.servicesBanner}>
      <div className={styles.container}>
        <Row gutter={[24, 24]} justify="space-around" align="middle">
          {stats.map((stat, index) => (
            <Col xs={12} sm={12} md={6} lg={6} key={index}>
              <div className={styles.statItem}>
                <div className={styles.iconWrapper}>
                  {stat.icon}
                </div>
                <div className={styles.statContent}>
                  <h3 className={styles.statTitle}>{stat.title}</h3>
                  <p className={styles.statValue}>{stat.value}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ServicesBanner;
