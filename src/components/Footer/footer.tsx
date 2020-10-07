import React from "react";
import {Link} from "react-router-dom";
import {
    Footer,
    FooterSection,
} from "react-mdl";
import {  useTranslation } from "react-i18next";

export const MainFooter = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Footer size="mega" className="footer" style={{ width: "100%" }}>
                <FooterSection type="middle" className="footerSection">
                    <p>{t('copyright')}</p>
                </FooterSection>
                <FooterSection type="middle" className="footerSection">
                    <Link to="/Contact" className="contactLink">
                        {t('contact')}
                    </Link>
                </FooterSection>
                <FooterSection type="middle" className="footerSection">
                    <a href="#">
                        <i className="fa fa-facebook" />
                        <span>. {t('socials.facebook')}</span>
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter" />
                        <span>. {t('socials.twitter')}</span>
                    </a>
                    <a href="#">
                        <i className="fa fa-instagram" />
                        <span>. {t('socials.instagram')}</span>
                    </a>
                </FooterSection>
            </Footer>
        </div>
    )
}
