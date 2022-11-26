import Screen1 from "./screen1";
import Screen2 from "./screen2";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={ <Screen1/> } />
                <Route path="/screen2" exact element={ <Screen2/> } />
            </Routes>
        </BrowserRouter>
    );
};
export default App;