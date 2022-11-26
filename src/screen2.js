import React from 'react';
import "./screen2.css"
const Screen2 = () => {
    return (<>
        
        <h1>Second Screen</h1>
        <div id="screen2_title">
            <div>Video Analytics</div>
        </div>
        <div id="video">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HucIqi8Lw3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

    </>);
}
export default Screen2;