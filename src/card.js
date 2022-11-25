const Card = ({round, scores, player1, player2, winner }) => {


    return (<>
        <div className="card">
            <div className="card_head">
                <div className="card_head_1">All India Senior Ranking Badminton</div>
                <div className="card_head_2">Tournament</div>
                <div className="card_head_3">Final</div>
            </div>
            <div className="match_info">
                <div className="player_1">{player1}</div>
                <div className="scores">
                    <div>v/s</div>
                    <div className="score_array">
                        {()=> {for(var i=0;i<scores.length;i++){
                            if(i===scores.length-1) return scores[i];
                            else return scores[i]+", ";
                        }}}
                    </div>
                    <div>v/s</div>
                </div>
                <div className="player_2">{player2}</div>
            </div>
        </div>
    </>);
}
export default Card;