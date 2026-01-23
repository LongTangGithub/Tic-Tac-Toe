import { GameController } from './modules/gameController.js';                   
                                                                                  
  console.log('Starting game...');                                                
  console.log('Current player:', GameController.getCurrentPlayer().name);         
                                                                                  
  // Play a few moves                                                             
  console.log(GameController.playRound(0)); // Player 1 places X at position 0    
  console.log(GameController.playRound(1)); // Player 2 places O at position 1    
  console.log(GameController.playRound(4)); // Player 1 places X at position 4    
  console.log(GameController.playRound(2)); // Player 2 places O at position 2    
  console.log(GameController.playRound(8)); // Player 1 places X at position 8 -  
                                                                         
                                                                                  
  console.log('Resetting game...');                                               
  GameController.resetGame();                                                     
  console.log('After reset:', Gameboard.getBoard());     