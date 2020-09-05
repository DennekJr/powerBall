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
      >
      </Header>
      <Content>
        <div className="pageContent">
          <Main />
        </div>
      </Content>
      <Footer size="mega" className="footer" style={{display: 'flex', justifyContent: 'space-between'}}>
        <FooterSection type="middle" style={{width: '50%'}}>
          <FooterDropDownSection title="Contact">
            <FooterLinkList>
              <a href="#">Email</a>
              <a href="#">Name</a>
              <a href="#">Email</a>
            </FooterLinkList>
          </FooterDropDownSection>
        </FooterSection>
        <FooterSection type="bottom" logo="">
          <FooterLinkList>
            <a href="#"><i className="fa fa-facebook"/></a>
            <a href="#"><i className="fa fa-twitter"/></a>
            <a href="#"><i className="fa fa-instagram"/></a>
          </FooterLinkList>
        </FooterSection>
        <FooterSection type="bottom" logo="">
          <FooterLinkList>
            <p>© 2020 . All Rights Reserved</p>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    </Layout>
  );
}

export default App;
