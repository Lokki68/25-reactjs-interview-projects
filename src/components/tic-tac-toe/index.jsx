import {useEffect, useState} from "react";
import {FaRegCircle} from "react-icons/fa";
import {IoMdClose} from "react-icons/io";

import styles from './styles.module.css'


function Square({value, onClick}) {

    const squareDisplay = (selectedValue) => {
        return selectedValue === 'X' ? <IoMdClose color='red'/> : value === 'O' ? <FaRegCircle color='blue'/> : null
    }

    return <button onClick={onClick} className={styles.square}>
        {
            value !== '' ? squareDisplay(value) : ''
        }
    </button>
}

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(''))
    const [isXTurn, setIsXTurn] = useState(true)
    const [status, setStatus] = useState('')
    const [endGame, setEndGame] = useState(false)

    const getWinner = (squares) => {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i]

            if (
                squares[x] &&
                squares[x] === squares[y] &&
                squares[x] === squares[z]
            ) {
                return squares[x]
            }
        }

    }

    const handleClick = (getCurrentSquare) => {
        let cpySquares = [...squares]
        if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return
        cpySquares[getCurrentSquare] = isXTurn ? 'X' : 'O'
        setIsXTurn(!isXTurn)
        setSquares(cpySquares)
    }
    
    const handleRestart = () => {
        setSquares(Array(9).fill(''))
        setIsXTurn(true)
        setEndGame(false)
    }
    
    useEffect(() => {
        if(!getWinner(squares) && squares.every(item => item !== '')) {
            setStatus('This is a draw, Please restart the game')
            setEndGame(true)
        } else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)} `)
            setEndGame(true)
        } else {
            setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`)
        }
        }, [squares, isXTurn])

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <Square value={squares[0]} onClick={() => handleClick(0)}/>
                <Square value={squares[1]} onClick={() => handleClick(1)}/>
                <Square value={squares[2]} onClick={() => handleClick(2)}/>
            </div>
            <div className={styles.row}>
                <Square value={squares[3]} onClick={() => handleClick(3)}/>
                <Square value={squares[4]} onClick={() => handleClick(4)}/>
                <Square value={squares[5]} onClick={() => handleClick(5)}/>
            </div>
            <div className={styles.row}>
                <Square value={squares[6]} onClick={() => handleClick(6)}/>
                <Square value={squares[7]} onClick={() => handleClick(7)}/>
                <Square value={squares[8]} onClick={() => handleClick(8)}/>
            </div>
            
            <h1>{status}</h1>
            {
                endGame ? <button onClick={handleRestart}>Restart Game</button> : null
            }
        </div>
    )
}