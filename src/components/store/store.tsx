import React from "react";
import './store.styles.css';
import {useTranslation} from "react-i18next";

export const Store = () => {
    const { t } = useTranslation();
    return (
        <section className="cards-wrapper">
            <div className="card-grid-space">
                <div className="num">01</div>
                <a className="card" href="https://store.playstation.com/en-hu/search/fifa%2021"
                    id="card1"
                >
                    <div>
                        <h1>{t('itemNames.fifa')}</h1>
                        <p>{t('itemDescription.fifa')}</p>
                        <div className="tags">
                            <div className="tag">$50.00</div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="card-grid-space">
                <div className="num">02</div>
                <a className="card" href="https://store.playstation.com/en-hu/search/call%20of%20duty"
                    id="card2"
                >
                    <div>
                        <h1>{t('itemNames.cod')}</h1>
                        <p>{t('itemDescription.cod')}</p>
                        <div className="tags">
                            <div className="tag">$50.00</div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="card-grid-space">
                <div className="num">03</div>
                <a className="card" href="https://store.playstation.com/en-hu/search/nba"
                   id="card3"
                >
                    <div>
                        <h1>{t('itemNames.nba')}</h1>
                        <p>{t('itemDescription.nba')}</p>
                        <div className="tags">
                            <div className="tag">$50.00</div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="card-grid-space">
                <div className="num">04</div>
                <a className="card" href="https://store.playstation.com/en-hu/search/mortal%20combat"
                   id="card4"
                >
                    <div>
                        <h1>{t('itemNames.mk')}</h1>
                        <p>{t('itemDescription.mk')}</p>
                        <div className="tags">
                            <div className="tag">$50.00</div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}
