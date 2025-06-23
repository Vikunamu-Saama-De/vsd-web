import { Layout, Menu, Button, Badge } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import styles from "./Header.module.less";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src="/singer-logo.svg" alt="Singer Logo" />
        </div>

        <div className={styles.navigation}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ border: "none", background: "transparent" }}
          >
            <Menu.Item key="1" className={styles.menuItem}>
              All Categories
            </Menu.Item>
            <Menu.Item key="2" className={styles.menuItem}>
              Products
            </Menu.Item>
            <Menu.Item key="3" className={styles.menuItem}>
              Services
            </Menu.Item>
            <Menu.Item key="4" className={styles.menuItem}>
              Support
            </Menu.Item>
          </Menu>
        </div>

        <div className={styles.actions}>
          <Button
            type="text"
            icon={<SearchOutlined />}
            className={styles.actionItem}
          />
          <Button
            type="text"
            icon={<UserOutlined />}
            className={styles.actionItem}
          >
            Log In
          </Button>
          <Badge count={2} className={styles.actionItem}>
            <Button type="text" icon={<ShoppingCartOutlined />}>
              My Cart
            </Button>
          </Badge>
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
