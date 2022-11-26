import Screen1 from "./screen1";
import Screen2 from "./screen2";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App=()=>{
    return (<>
    <BrowserRouter>
        <Routes>
            <Route exact path="/"><Screen1/></Route>
            <Route exact path="/screen2"><Screen2/></Route>
        </Routes>
    </BrowserRouter>
    </>);
};
export default App;