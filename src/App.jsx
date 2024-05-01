import React from "react";
import "./assets/App.css";
import "./assets/styles.css";

import Board from "./components/Board";

function App() {
    return (
        <>
            <h1>Tic-Tac-Toe</h1>
            <p>This is my first <span>REAL</span> React app!</p>
            <Board />
        </>
    );
}

export default App;