import { useState } from "react"; // using states to save value

export default function Board() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true); // set to true bc x starts

	const winner = calculateWinner(squares);
	let status;

	// won't run if winner is null, which it will return until someone wins
	if (winner){
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O"); // ternary based on the "next" boolean
	}

	function handleClick(i){
		const nextSquares = squares.slice();
		
		// only allow placement in empty squares && someone hasn't won
		if (nextSquares[i] != null || calculateWinner(squares)){
			return;
		}

		if (xIsNext){
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		setXIsNext(!xIsNext)

		setSquares(nextSquares);
		console.log("Clicked!");
	}

	function handleResetClick(){
		setSquares(Array(9).fill(null));
		setXIsNext(true);
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
		<div className="reset-button">
		<button onClick={handleResetClick}>Reset game</button>
		</div>
	</>
	);

	function calculateWinner(squares) {
		const lines = [
		  [0, 1, 2],
		  [3, 4, 5],
		  [6, 7, 8],
		  [0, 3, 6],
		  [1, 4, 7],
		  [2, 5, 8],
		  [0, 4, 8],
		  [2, 4, 6]
		];


		for (let i = 0; i < lines.length; i++) {
		  const [a, b, c] = lines[i];
		  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { // if square a has something, if a and b are the same, and if a and c is the same
			return squares[a];
		  }
		}
		return null;
	}

  }

  function Square({value, onSquareClick}){
	return <button className="square" onClick={onSquareClick}>{value}</button>
  }