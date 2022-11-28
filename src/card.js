import React from 'react';
import "./card.css"
const flag = "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg";
const logo = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png";
const crown = "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png";

const Card = ({ round, scores, player1, player2, winner, tournament }) => {
    return (<>
        <div className="card">
            <div className="card_head">
                <div className="card_head_1">{tournament}</div>
                {/* <div className="card_head_2">Tournament</div> */}
                <div className="card_head_3">{round}</div>
            </div>
            <div className="match_info">
                <div className="player_1">
                    {winner===player1?<img src={crown} alt=""  />:<div style={{padding:"8.5px 0px"}}/>}
                    <div className="flag">
                    <img src={flag} alt=""  style={{ width: "100px", height: "100px" }} />
                   </div> {player1}
                </div>
                <div className="scores">
                    <div className='vs'>v/s</div>
                    <div className="score_array">
                        {
                            scores.map((score) => {
                                return score;
                            })
                        }
                    </div>
                    <div><img src={logo} alt=""  /></div>
                </div>
                <div className="player_2">
                {winner===player2?<img src={crown} alt="" />:<div style={{padding:"8.5px 0px"}}/>}
                    <div className="flag">
                        <img src={flag} alt=""  style={{ width: "100px", height: "100px" }} />
                    </div>
                    {player2}
                </div>
            </div>
        </div>
    </>);
}
export default Card;
