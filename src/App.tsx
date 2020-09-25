import React from "react";
import "./App.css";
import { Layout, Header, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/routes/main";
import { MainFooter } from "./components/Footer/footer";

function App() {
  return (
    <Layout>
      <Header
        className="headerColor"
        title={
          <Link to="/">
            <img
              src="/images/icon.png"
              alt="icon"
              style={{ objectFit: "contain", height: "100px" }}
            />
          </Link>
        }
        scroll
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            flexShrink: 1,
            fontFamily: "Rajdhani",
            fontSize: "20px",
            marginRight: "60px",
          }}
        >
          Home
        </Link>
        <Link
          to="/Contact"
          className="contactLink"
          style={{
            color: "white",
            paddingRight: "30px",
            fontFamily: "Rajdhani",
            fontStyle: "normal",
            textDecoration: "none",
          }}
        >
          Contact Us
        </Link>
      </Header>
      <Content>
        <div className="pageContent">
          <Main />
          <MainFooter />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
