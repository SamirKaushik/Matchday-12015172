import React, { useRef } from 'react';
import "./screen2.css"
const Screen2 = () => {
    const ytvideo=useRef(null);
    const pauseVideo=()=>{
        ytvideo.current.contentWindow.postMessage(JSON.stringify({ event: 'command',
        func: 'pauseVideo' }), '*');
        console.log(ytvideo)
        // console.log(ytvideo.current.contentWindow)
    }
    const resumeVideo=()=>{
        ytvideo.current.contentWindow.postMessage(JSON.stringify({ event: 'command',
        func: 'playVideo' }), '*');
    }
    const forward_5=()=>{
        // const cur=ytvideo.current.getCurrentTime();
        // console.log(cur)
        // ytvideo.current.contentWindow.postMessage(JSON.stringify({event:"command",func:"seekTo",args:[cur+5, true]}), '*');
    }
    const replay_5=()=>{
        // const x=document.querySelector('.ytp-time-current')[0].innerHTML;
        // console.log(x);
        // ytvideo.current.contentWindow.postMessage(JSON.stringify({event:"command",func:"seekTo",args:[cur-5, true]}), '*');
    }
    return (<>
        
        <h1>Second Screen</h1>
        <div id="screen2_title">
            <div>Video Analytics</div>
        </div>
        <div id="video">
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/HucIqi8Lw3E?enablejsapi=1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            ref={ytvideo}
            >
                {/* HucIqi8Lw3E */}
        </iframe>
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