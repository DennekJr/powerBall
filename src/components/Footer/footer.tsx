import React from "react";
import {Link} from "react-router-dom";
import {
    Footer,
    FooterSection,
} from "react-mdl";

export const MainFooter = () => {
    return (
        <div>
            <Footer size="mega" className="footer" style={{ width: "100%" }}>
                <FooterSection type="middle" className="footerSection">
                    <p>© E Gamerz 2020 . All Rights Reserved</p>
                </FooterSection>
                <FooterSection type="middle" className="footerSection">
                    <Link to="/Contact" className="contactLink">
                        Contact Us.
                    </Link>
                </FooterSection>
                <FooterSection type="middle" className="footerSection">
                    <a href="#">
                        <i className="fa fa-facebook" />
                        <span>. Facebook</span>
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter" />
                        <span>. Twitter</span>
                    </a>
                    <a href="#">
                        <i className="fa fa-instagram" />
                        <span>. Instagram</span>
                    </a>
                </FooterSection>
            </Footer>
        </div>
    )
}
