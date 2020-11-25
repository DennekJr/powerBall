import React from "react";
import "./tournamentBracket.styles.css";
import {  useTranslation } from "react-i18next";

export const TournamentBracket = () => {
    const { t } = useTranslation();
    return (
    <div>
      <section id="bracket">
        <div className="container">
          <div className="split split-one">
            <div className="round round-one current">
              <div className="round-details">
                  {t('tournamentRound.round1')}<br />
                <span className="date">March 16</span>
              </div>
              <ul className="matchup">
                <li className="team team-top">
                  Duke<span className="score">76</span>
                </li>
                <li className="team team-bottom">
                  Virginia<span className="score">82</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Wake Forest<span className="score">64</span>
                </li>
                <li className="team team-bottom">
                  Clemson<span className="score">56</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  North Carolina<span className="score">68</span>
                </li>
                <li className="team team-bottom">
                  Florida State<span className="score">54</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  NC State<span className="score">74</span>
                </li>
                <li className="team team-bottom">
                  Maryland<span className="score">92</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Georgia Tech<span className="score">78</span>
                </li>
                <li className="team team-bottom">
                  Georgia<span className="score">80</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Auburn<span className="score">64</span>
                </li>
                <li className="team team-bottom">
                  Florida<span className="score">63</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Kentucky<span className="score">70</span>
                </li>
                <li className="team team-bottom">
                  Alabama<span className="score">59</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Vanderbilt<span className="score">64</span>
                </li>
                <li className="team team-bottom">
                  Gonzaga<span className="score">68</span>
                </li>
              </ul>
            </div>
            {/*END ROUND ONE*/}

            <div className="round round-two">
              <div className="round-details">
                  {t('tournamentRound.round2')}<br />
                <span className="date">March 18</span>
              </div>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
            </div>
            {/*END ROUND TWO*/}

            <div className="round round-three">
              <div className="round-details">
                  {t('tournamentRound.round3')}<br />
                <span className="date">March 22</span>
              </div>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
            </div>
            {/*END ROUND THREE*/}
          </div>

          <div className="champion">
            <div className="semis-l">
              <div className="round-details">
                  {t('tournamentRound.semi')} <br />
                <span className="date">March 26-28</span>
              </div>
              <ul className="matchup championship">
                <li className="team team-top">
                  &nbsp;<span className="vote-count">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="vote-count">&nbsp;</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="champion">
            <div className="final">
              <i className="fa fa-trophy"/>
              <div className="round-details">
                  {t('tournamentRound.final')} <br />
                <span className="date">March 30 - Apr. 1</span>
              </div>
              <ul className="matchup championship">
                <li className="team team-top">
                  &nbsp;<span className="vote-count">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="vote-count">&nbsp;</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="champion">
            <div className="semis-r">
              <div className="round-details">
                  {t('tournamentRound.east')} <br />
                <span className="date">March 26-28</span>
              </div>
              <ul className="matchup championship">
                <li className="team team-top">
                  &nbsp;<span className="vote-count">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="vote-count">&nbsp;</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="split split-two">
            <div className="round round-three">
              <div className="round-details">
                  {t('tournamentRound.round3')}<br />
                <span className="date">March 22</span>
              </div>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
            </div>
            {/*END ROUND THREE*/}

            <div className="round round-two">
              <div className="round-details">
                  {t('tournamentRound.round2')}<br />
                <span className="date">March 18</span>
              </div>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
            </div>
            {/*END ROUND TWO*/}
            <div className="round round-one current">
              <div className="round-details">
                  {t('tournamentRound.round1')}<br />
                <span className="date">March 16</span>
              </div>
              <ul className="matchup">
                <li className="team team-top">
                  Minnesota<span className="score">62</span>
                </li>
                <li className="team team-bottom">
                  Northwestern<span className="score">54</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Michigan<span className="score">68</span>
                </li>
                <li className="team team-bottom">
                  Iowa<span className="score">66</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Illinois<span className="score">64</span>
                </li>
                <li className="team team-bottom">
                  Wisconsin<span className="score">56</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Purdue<span className="score">36</span>
                </li>
                <li className="team team-bottom">
                  Boise State<span className="score">40</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Penn State<span className="score">38</span>
                </li>
                <li className="team team-bottom">
                  Indiana<span className="score">44</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Ohio State<span className="score">52</span>
                </li>
                <li className="team team-bottom">
                  VCU<span className="score">80</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  USC<span className="score">58</span>
                </li>
                <li className="team team-bottom">
                  Cal<span className="score">59</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Virginia Tech<span className="score">74</span>
                </li>
                <li className="team team-bottom">
                  Dartmouth<span className="score">111</span>
                </li>
              </ul>
            </div>
            {/*END ROUND ONE*/}
          </div>
        </div>
      </section>
    </div>
  );
};
