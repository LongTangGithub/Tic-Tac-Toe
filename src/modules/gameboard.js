export const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => {
        return board;
    };

    const placeMarker = (position, marker) => {
        if ( isPositionAvailable( position )) {
            board[position] = marker;
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    const isPositionAvailable = ( position ) => {
        return board[position] === "";
    };

    return { getBoard, placeMarker, resetBoard, isPositionAvailable };
})();

