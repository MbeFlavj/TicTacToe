import { useEffect, useState, useRef } from "react";
import Board from "./Board.jsx";
import Button from "./Button.jsx";
import Move from "./Move.jsx";
import './Game.css'

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
    const scrollRef = useRef(null);

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function reset() {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0)
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;

        return (
            <Move
              key={move} 
              onButtonClick={() => jumpTo(move)}
              isActive={move === currentMove}
            >
                {description}
            </Move>
        );
    });

    useEffect(() => {
        if (scrollRef.current) {
            const children = scrollRef.current.children;
            const activeBall = children[currentMove];

            if (activeBall) {
                activeBall.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [currentMove]);

    return (
        <>
            <div className="game">
                <div className="board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                </div>

                <div className="game-info">
                    <div className="history-navigation">
                        <Button
                        className="back-btn" 
                        onButtonClick={() => jumpTo(currentMove - 1)}
                        disabled={currentMove === 0}
                        > 
                            &lt; 
                        </Button>

                        <div className="past-moves" ref={scrollRef}>
                            {moves}
                        </div>

                        <Button 
                        className="continue-btn" 
                        onButtonClick={() => jumpTo(currentMove + 1)}
                        disabled={currentMove >= history.length - 1}
                        > 
                            &gt;
                        </Button>
                    </div>
                </div>

                <div className="btn-wrapper">
                        <Button onButtonClick={reset}>
                            RESTART
                        </Button>
                    </div>
            </div>
        </>
    );
}