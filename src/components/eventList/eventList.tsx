import React from "react";
import "./eventList.styles.css";
import { IndividualEvent } from "./individualEvents";
import {Footer, FooterDropDownSection, FooterLinkList, FooterSection} from "react-mdl";

export const EventList = () => {
  return (
    <div className="eventDetailContainer">
      <div className="eventDetailHome">
        <div className="vertical" />
        <div className="homeText">
          <h5>
            <span>HOME</span> / WITHOUT SIDEBAR
          </h5>
          <h2>WITHOUT SIDEBAR</h2>
        </div>
      </div>
      <div className="eventDetailBody" id="eventListBody">
        <IndividualEvent
          image="https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/blog-img-1.jpg"
          date="OCTOBER 19, 2020"
          title="WE'VE WON THE KINGS! WOW!"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        />
        <IndividualEvent
          image="https://media.altchar.com/prod/images/940_530/gm-13f0f1bb-b35f-4be3-858e-125a438d496a-fortnites6shadowform.jpeg"
          date="MARCH 4, 2020"
          title="APEX LEGENDS YEARLY TOURNAMENT IS HERE!!!"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        />
        <IndividualEvent
          image="https://ymcawichita.org/sites/default/files/styles/ffwy_prgf_banner/public/2019-08/adult-competition-concentration-929831.jpg?h=bfa41935&itok=L2jeuCkL"
          date="JUNE 19, 2020"
          title="FIFA 20 MONTHLY FUT CHAMPIONSHIP!"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        />
      </div>
        <Footer size="mega" className="footer" style={{width: '100%'}}>
            <FooterSection type="middle" className="footerSection">
                <FooterDropDownSection title="Contact">
                    <FooterLinkList>
                        <a href="#">Email</a>
                        <a href="#">Name</a>
                        <a href="#">Email</a>
                    </FooterLinkList>
                </FooterDropDownSection>
            </FooterSection>
            <FooterSection type="middle" className="footerSection">
                <FooterDropDownSection title="Socials">
                    <FooterLinkList>
                        <a href="#"><i className="fa fa-facebook"/></a>
                        <a href="#"><i className="fa fa-twitter"/></a>
                        <a href="#"><i className="fa fa-instagram"/></a>
                    </FooterLinkList>
                </FooterDropDownSection>
            </FooterSection>
            <FooterSection type="bottom" logo="">
                <FooterLinkList>
                    <p>© 2020 . All Rights Reserved</p>
                </FooterLinkList>
            </FooterSection>
        </Footer>

    </div>
  );
};
