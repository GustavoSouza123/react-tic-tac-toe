import React from "react";
import { useState } from "react";
import Square from "./Square";
import JSConfetti from "js-confetti";

function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if(squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    let status;
    if(winner) {
        let emoji = winner === 'X' ? '❌' : '⭕';
        status = 'Winner: ' + emoji;
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: [emoji],
            emojiSize: 36,
            confettiNumber: 50,
        });
    } else {
        if(squares.every(square => square != null)) {
            status = 'Tie! No winners';
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti({
                emojis: ['👔'],
                emojiSize: 36,
            });
        } else {
            status = 'Next player: ' + (xIsNext ? '❌' : '⭕');
        }
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4 ,8],
        [2, 4, 6]
    ];
    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board;