import React from "react";
import "./App.css";
import {
  Layout,
  Header,
  Content,
} from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/routes/main";

function App() {
  return (
    <Layout>
      <Header
        className="headerColor"
        title={
          <img
            src="/images/icon.png"
            alt="icon"
            style={{ objectFit: "contain", height: '100px' }}
          />
        }
        scroll
      >
        <Link to="/" style={{ textDecoration: "none", color: "white", flexShrink: 1, fontFamily: '' }}>
          Home
        </Link>
      </Header>
      <Content>
        <div className="pageContent">
          <Main />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
