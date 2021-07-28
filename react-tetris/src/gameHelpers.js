export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// stage is array of arrays containing an array (number, string) example, 4x3 stage
// [[[ [0, 'clear'] ],[ [0, 'clear'] ],[ [0, 'clear'] ]],
//  [[ [0, 'clear'] ],[ [0, 'clear'] ],[ [0, 'clear'] ]], 
//  [[ [0, 'clear'] ],[ [0, 'clear'] ],[ [0, 'clear'] ]],
//  [[ [0, 'clear'] ],[ [0, 'clear'] ],[ [0, 'clear'] ]]]
export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )


export const checkCollision = (player, stage, {x: moveX, y:moveY}) => {
    for (let y = 0; y < player.tetromino.length; y++) {
        for (let x = 0; x < player.tetromino[y].length; x++ ||
            ) {

        }
    }
}
    