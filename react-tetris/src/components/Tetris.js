import React , { useState } from 'react';

import { createStage } from '../gameHelpers';

// styled components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'

// custom Hookes
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';


const Tetris = () => {

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render");
  console.log("wait i rerender alot?");

  const movePlayer = (dir) => { 
    // passing object into function
    updatePlayerPos({ x: dir, y: 0})
  }

  const startGame = () => {
    // reset everything
    console.log("start button clicked!")
    setStage(createStage());
    resetPlayer();
  }

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false})
  }

  const dropPlayer = () => {
    // why don't we just put updatePlayerPos here?
    drop()
  }

  const moveKey = ({ keyCode }) => {
    console.log("something is stuck!")
    if (!gameOver) {
      // keyboard keys have keycodes
      if (keyCode === 37) {
        // move left
        movePlayer(-1)
      } else if (keyCode === 39) {
        // move right
        movePlayer(1)
      } else if (keyCode === 40) {
        dropPlayer()
      }
    }
  }

  return (
    // need this button key down on the entire screen, not just the stage
    //                                                      note: this below is
    //                                                      an anonymous fn
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => moveKey(e)} >
      <StyledTetris>
        <Stage stage={ stage }/>
        <aside>
          {gameOver ? (
            <Display  text="Game Over"/>
          ) :  
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          }
          <StartButton callback={startGame}/>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
