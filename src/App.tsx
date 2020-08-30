import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/routes/main";

function App() {
  return (
    <Layout>
      <Header
        className="headerColor"
        title={
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Events
          </Link>
        }
        scroll
      >
        <Navigation>
          <Link to="/eventList">Event List</Link>
          <Link to="/eventDetail">Event Detail</Link>
        </Navigation>
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
