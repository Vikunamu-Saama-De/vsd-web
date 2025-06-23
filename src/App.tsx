import "./App.css";
import { Layout } from "antd";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./modules/home/page/Home";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content>
        <Home />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
