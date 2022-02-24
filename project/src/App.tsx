import {useState} from "react"
import './App.css';
import {calculateWinner} from "./components/calcWinner"
import Board from './components/Board'

export type SquareValue = 'X' | 'O' | null;

const App: React.FC = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [history, setHistory] = useState<{squares: SquareValue[]}[]>([
    {
      squares: Array(9).fill(null)
    }
  ]);

  const handleClick = (i: number): void => {
    const newHistory = history.slice(0, stepNumber + 1);
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(newHistory.concat([
      {
        squares: squares
      }
    ]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
};

export default App;