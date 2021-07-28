import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        // updateStage fn gets defined inside arrow fn, then arrow fn
        // calls setStage fn passing in newly defined fn as param.
        const updateStage = prevStage => {
            // first flush stage -> clear the 'clear' blocks or else keep
            // we're building a new stage here
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
            );
            // then draw new stage
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            // backticks forms a string that can contain any
                            // javascript expression using ${}
                            `${player.collided ? 'merge' : 'clear'}` 
                        ]
                    }
                })
            });
            return newStage;
        }
        
        // useEffect will call setStage after every DOM update
               //param    fnbody
        setStage(prev  => updateStage(prev))
    }, [player])

    return [stage, setStage];
}