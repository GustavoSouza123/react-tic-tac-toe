import React from "react";
import "./assets/App.css";
import "./assets/styles.css";

import Game from "./components/Game";

function App() {
    return (
        <>
            <h1># Tic-Tac-Toe #</h1>
            <p>This is my first <span>REAL</span> React app!</p>
            <Game />
        </>
    );
}

export default App;