export const Tetrominos = {
    0: { shape: [[0]], color: '0,0,0' },
    I: { 
        shape: [
                [0, 'I', 0, 0],
                [0, 'I', 0, 0],
                [0, 'I', 0, 0],
                [0, 'I', 0, 0]
            ],
        color: '80, 227, 230'
    },
    J: { 
        shape: [
                [0,  'J', 0],
                [0,  'J', 0],
                [0,  'J', 0],
                ['J','J', 0]
            ],
        color: '36, 95, 223'
    },
    L: { 
        shape: [
                [0, 'L',  0],
                [0, 'L',  0],
                [0, 'L',  0],
                [0, 'L','L']
            ],
        color: '223, 173, 36'
    },
    T: { 
        shape: [
                ['T', 'T',  'T'],
                [0, 'T',  0],
            ],
        color: '30, 60, 36'
    },
    O: {
        shape: [
                ['O', 'O'],
                ['O', 'O']
        ],
        color: '78, 150, 200'
    },
    S: {
        shape: [
                [0,    'S',  'S'],
                ['S' , 'S',  0],
                [0,    0,    0],
        ],
        color: '180, 20, 136'
    },
    Z: {
        shape: [
                ['Z', 'Z',   0],
                [0  , 'Z', 'Z'],
                [0,    0,    0],
        ],
        color: '50, 200, 50'
    }
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ'
    const rndInt = randomIntFromInterval(1, tetrominos.length - 1)
    const randTetrominos = tetrominos[rndInt]
    console.log(rndInt);
    return Tetrominos[randTetrominos]
}
// note: curly braces means objects, note: functions are objects

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}