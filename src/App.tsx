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
        {/*<Navigation>*/}
        {/*  <Link to="/eventList">Event List</Link>*/}
        {/*</Navigation>*/}
      </Header>
      <Content>
        <div className="pageContent">
          <Main />
        </div>
      </Content>
      <Footer size="mega" className="footer">
        <FooterSection type="middle">
          <FooterDropDownSection title="Details">
            <FooterLinkList>
              <a href="/EventList">Game List</a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Contact">
            <FooterLinkList>
              <a href="#">Email</a>
              <a href="#">Name</a>
              <a href="#">Number</a>
            </FooterLinkList>
          </FooterDropDownSection>
        </FooterSection>
      </Footer>
    </Layout>
  );
}

export default App;
