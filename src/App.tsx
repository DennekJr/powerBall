import React from "react";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Content,
  Footer,
  FooterSection,
  FooterDropDownSection,
  FooterLinkList,
} from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/routes/main";

function App() {
  return (
    <Layout>
      <Header
        className="headerColor"
        title={
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        }
        scroll
       />
      <Content>
        <div className="pageContent">
          <Main />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
