import React from "react";
import { Row, Col } from "antd";
import PromoBanner from "./PromoBanner";
import type { PromoBannerProps } from "./PromoBanner";
import styles from "./PromoGrid.module.less";

interface PromoGridProps {
  banners: PromoBannerProps[];
  title?: string;
  subtitle?: string;
  layout?: "default" | "featured" | "mixed";
}

const PromoGrid: React.FC<PromoGridProps> = ({
  banners,
  title,
  subtitle,
  layout = "default",
}) => {
  // Different layouts for the promo banners
  const renderBanners = () => {
    switch (layout) {
      case "featured":
        // One large banner on top, two medium banners below
        return (
          <>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                {banners.length > 0 && (
                  <PromoBanner {...banners[0]} size="large" />
                )}
              </Col>
            </Row>
            <Row gutter={[24, 24]} className={styles.secondaryRow}>
              <Col xs={24} md={12}>
                {banners.length > 1 && (
                  <PromoBanner {...banners[1]} size="medium" />
                )}
              </Col>
              <Col xs={24} md={12}>
                {banners.length > 2 && (
                  <PromoBanner {...banners[2]} size="medium" />
                )}
              </Col>
            </Row>
          </>
        );

      case "mixed":
        // Layout similar to the image: one large banner on left, two stacked on right for first row
        // Additional banners displayed in a grid below
        return (
          <>
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={16}>
                {banners.length > 0 && (
                  <PromoBanner {...banners[0]} size="large" aspectRatio="4/3" />
                )}
              </Col>
              <Col xs={24} lg={8}>
                <Row gutter={[0, 24]}>
                  <Col span={24}>
                    {banners.length > 1 && (
                      <PromoBanner {...banners[1]} size="small" />
                    )}
                  </Col>
                  <Col span={24}>
                    {banners.length > 2 && (
                      <PromoBanner {...banners[2]} size="small" />
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Display additional banners in a grid below */}
            {banners.length > 3 && (
              <Row gutter={[24, 24]} className={styles.additionalRow}>
                {banners.slice(3).map((banner) => (
                  <Col key={banner.id} xs={24} md={12}>
                    <PromoBanner {...banner} size="medium" />
                  </Col>
                ))}
              </Row>
            )}
          </>
        );

      default:
        // Default grid layout
        return (
          <Row gutter={[24, 24]}>
            {banners.map((banner) => (
              <Col key={banner.id} xs={24} md={12} lg={8}>
                <PromoBanner {...banner} />
              </Col>
            ))}
          </Row>
        );
    }
  };

  return (
    <div className={styles.promoGridContainer}>
      {(title || subtitle) && (
        <div className={styles.sectionHeader}>
          {title && <h2 className={styles.sectionTitle}>{title}</h2>}
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>
      )}
      {renderBanners()}
    </div>
  );
};

export default PromoGrid;
