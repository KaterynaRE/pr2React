import './App.css';
import React from "react";
import ShakespeareMain from "./shekspirMainInfo";
import NameFilm from "./filmMain";

function App() {
    return (
        <div className="App">
            <ShakespeareMain/>
            <hr/>
            <NameFilm />
        </div>
    );
}

export default App;
