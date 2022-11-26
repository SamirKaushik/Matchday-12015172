import Screen1 from "./screen1";
import Screen2 from "./screen2";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
const App=()=>{
    return (<>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Screen1/>}/>
            <Route exact path="/screen2" element={<Screen2/>}/>
        </Routes>
    </BrowserRouter>
    </>);
};
export default App;