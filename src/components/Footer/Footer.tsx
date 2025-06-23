import { Layout, Divider } from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import styles from "./Footer.module.less";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumns}>
          <div className={styles.companyInfo}>
            <div className={styles.logo}>
              <img src="/singer-logo.svg" alt="Singer Logo" />
            </div>
            <p>
              VSD is a leading provider of e-commerce services for e-commerce
              businesses worldwide.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Twitter">
                <TwitterOutlined />
              </a>
              <a href="#" aria-label="Facebook">
                <FacebookOutlined />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramOutlined />
              </a>
              <a href="#" aria-label="YouTube">
                <YoutubeOutlined />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LinkedinOutlined />
              </a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">What's New</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>

        <Divider className={styles.divider} />

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            Copyright © {new Date().getFullYear()} VSD, Inc. All Rights
            Reserved.
          </div>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
