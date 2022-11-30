import React, { useRef,useState } from 'react';
import "./screen2.css"
import ReactPlayer from 'react-player'

const Screen2 = () => {
    const ytvideo=useRef(null);
    const [play,setPlay]=useState(true);

    const pauseVideo=()=>{
        setPlay(false);
    }
    const resumeVideo=()=>{
       setPlay(true);
    }
    const forward_5=()=>{
        const cur=ytvideo.getCurrentTime();
        ytvideo.current.seekTo(cur+5)
    }
    const replay_5=()=>{
        const cur=ytvideo.getCurrentTime();
        ytvideo.current.seekTo(cur-5)
    }
    return (<>
        
        <h1>Second Screen</h1>
        <div id="screen2_title">
            <div>Video Analytics</div>
        </div>
        <div id="video">
        <ReactPlayer 
            url="https://www.youtube.com/embed/YH0UKYWvpyQ" 
            ref={ytvideo}
            playing={play}
            />
                {/* HucIqi8Lw3E: video from this id is getting blocked so used a similar video*/}
        </div>
        <div id='button-control'>
        <button className='button' onClick={resumeVideo}><i className="material-symbols-outlined">play_arrow</i></button>
        <button className='button' onClick={pauseVideo}><i className="material-symbols-outlined">pause</i></button>
        <button className='button' onClick={forward_5}><i className="material-symbols-outlined">forward_5</i></button>
        <button className='button' onClick={replay_5}><i className="material-symbols-outlined">replay_5</i></button>
        </div>
    </>);
}
export default Screen2;