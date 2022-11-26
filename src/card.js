import React from 'react';
const flag = "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg";
const logo = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221125T214610Z&X-Amz-Expires=86400&X-Amz-Signature=30b462a6275a6c75abc91578424f340b83338fd997f70ae814329a81f72a73ee&X-Amz-SignedHeaders=host&x-id=GetObject";
const crown = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221125T214650Z&X-Amz-Expires=86400&X-Amz-Signature=6d982673590940c926841b6482016183bd27db17e16d1b4678ffdf2d0c7b693b&X-Amz-SignedHeaders=host&x-id=GetObject";

const Card = ({ round, scores, player1, player2, winner }) => {
    return (<>
        <div className="card">
            <div className="card_head">
                <div className="card_head_1">All India Senior Ranking Badminton</div>
                <div className="card_head_2">Tournament</div>
                <div className="card_head_3">{round}</div>
            </div>
            <div className="match_info">
                <div className="player_1">{player1}</div>
                <div className="scores">
                    <div>v/s</div>
                    <div className="score_array">
                        {() => {
                            for (var i = 0; i < scores.length; i++) {
                                if (i === scores.length - 1) return scores[i];
                                else return scores[i] + ", ";
                            }
                        }}
                    </div>
                    <div>v/s</div>
                </div>
                <div className="player_2">{player2}</div>
            </div>
        </div>
    </>);
}
export default Card;