import React, {  useState } from "react";
import {
    Tab,
    Tabs,
    Grid,
    Cell,
} from "react-mdl";
import './eventDetail.styles.css';
import {AllMatches} from "./individualTabs/allMatches";
import {Upcoming} from "./individualTabs/upcoming";
import {Finished} from "./individualTabs/finished";
import { useTranslation } from "react-i18next";

export const TabsNavigation = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);

    function toggleCategories() {
        if (activeTab === 0) {
            return (
                <div className="matchesGrid">
                    <AllMatches name1="Chelsea FC" name2="Arsenal FC" score1="1" score2="4" date={t('allMatchesTab.date')}/>
                    <AllMatches name1="Chelsea FC" name2="Arsenal FC" score1="1" score2="4" date="17th October 2019, 11:55"/>
                    <AllMatches name1="Chelsea FC" name2="Arsenal FC" score1="1" score2="4" date="17th October 2019, 11:55"/>
                    <AllMatches name1="Chelsea FC" name2="Arsenal FC" score1="1" score2="4" date="17th October 2019, 11:55"/>
                </div>
            );
        } else if (activeTab === 1) {
            return (
                <div className="matchesGrid">
                    <Upcoming />
                </div>
            );
        } else if (activeTab === 2) {
            return (
                <div className="matchesGrid">
                    <Finished />
                </div>
            );
        }
    }

    return (
        <div className="categoryTabs">
            <Tabs
                activeTab={activeTab}
                onChange={(tabId) => setActiveTab(tabId)}
                ripple
                style={{marginTop: '45px'}}
            >
                    <Tab className="tab" >{t('tabs.allMatches')}</Tab>
                    <Tab className="tab">{t('tabs.upcoming')}</Tab>
                    <Tab className="tab">{t('tabs.finished')}</Tab>
            </Tabs>
            <Grid>
                <Cell col={12}>
                    <div className="content">{toggleCategories()}</div>
                </Cell>
            </Grid>
        </div>
    );
};
