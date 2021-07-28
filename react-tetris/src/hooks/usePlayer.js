import { useCallback, useState } from 'react';
import { STAGE_HEIGHT, STAGE_WIDTH } from '../gameHelpers';
import { Tetrominos, randomTetromino } from '../tetrominos';

export const usePlayer = () => {
    // react hook useState takes in 'initial state'
    // it returns the state and a function to change that state
    const [player, setPlayer] = useState({
        // properties
        pos: {x : 0, y : 0},
        tetromino: Tetrominos[0].shape,
        collided: false
    })
    /*
    ^ above is equivalent to this below 
    const useState = [{}, () => {}]
    const player = useState[0]
    const setPlayer = useState[1]
    */

    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
            collided
        }))
    }

    // useCallback is a standard react hook
    const resetPlayer = useCallback(() => {
        setPlayer({
            // no prev thing cause we're just resetting the stage
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0},
            tetromino: randomTetromino().shape,
            collided: false
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer];
}