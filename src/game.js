import { Gameboard } from "./modules/gameboard.js";
import { Player } from "./modules/player.js";

console.log("Initial Board: ", Gameboard.getBoard());

Gameboard.placeMarker(0, 'X');
console.log('After placing X at 0:', Gameboard.getBoard());

Gameboard.placeMarker(4, 'O');
console.log('After placing O at 4:', Gameboard.getBoard());

console.log('Try placing X at 0 again:', Gameboard.placeMarker(0, 'X')); // Should return false      

 Gameboard.resetBoard();                                                           
console.log('After reset:', Gameboard.getBoard());   

const player1 = Player('Alice', 'X');  
 console.log(player1.name);                                                     
  console.log(player1.marker);