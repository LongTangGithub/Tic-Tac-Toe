import { Gameboard } from './gameboard.js';
import { Player } from './player.js';   

export const GameController = (() => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],   // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    let firstPlayer = Player('Long', 'X');
    let secondPlayer = Player('Rida', 'O');

    let currentPlayer = firstPlayer;

    const getCurrentPlayer = () => currentPlayer;

    const switchPlayer = () => {
        currentPlayer = (currentPlayer === firstPlayer) ? secondPlayer : firstPlayer;
        console.log(`It's ${currentPlayer.name}'s turn`)
    };

    const checkWin = () => {
        const board = Gameboard.getBoard();

        for( const winCombinations of winningCombinations) {
            const [a, b, c] = winCombinations;

            if( board[a] !== "" && 
                board[a] === board[b] &&
                board[a] === board[c]) {
                    console.log("We have a winner!!");
                    return true;
            }
        }
        return false;
    };

    const checkTie = () => {
        const board = Gameboard.getBoard();

        return !board.includes("") && !checkWin();
    };

    const playRound = ( position ) => {
        const placed = Gameboard.placeMarker(position, marker);

        if ( !placed ) {
            return "invalid";
        }

        if (checkWin()) {
            return "tie";
        }

        switchPlayer();
        return "continue";
    };

    const resetGame = () => {
        Gameboard.resetBoard();
        currentPlayer = firstPlayer;
    };

    return {
        getCurrentPlayer,
        playRound,
        resetGame,
        checkWin,
        checkTie
    };
})();