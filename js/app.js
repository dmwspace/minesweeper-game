const tilesArr = [
    {"0": {mine: false, flag: false, adjacentTiles: [1, 5, 6]}},
    {"1": {mine: false, flag: false, adjacentTiles: [0, 2, 5, 6, 7]}},
    {"2": {mine: false, flag: false, adjacentTiles: [1, 3, 6, 7, 8]}},
    {"3": {mine: false, flag: false, adjacentTiles: [2, 4, 7, 8, 9]}},
    {"4": {mine: false, flag: false, adjacentTiles: [3, 8, 9]}},
    {"5": {mine: false, flag: false, adjacentTiles: [1, 2, 6, 10, 11]}},
    {"6": {mine: false, flag: false, adjacentTiles: [0, 1, 2, 5, 7, 10, 11, 12]}},
    {"7": {mine: false, flag: false, adjacentTiles: [1, 2, 3, 6, 8, 11, 12, 13]}},
    {"8": {mine: false, flag: false, adjacentTiles: [2, 3, 4, 7, 9, 12, 13, 14]}},
    {"9": {mine: false, flag: false, adjacentTiles: [3, 4, 8, 13, 14]}},
    {"10": {mine: false, flag: false, adjacentTiles: [5, 6, 11, 15, 16]}},
    {"11": {mine: false, flag: false, adjacentTiles: [5, 6, 7, 10, 12, 15, 16, 17]}},
    {"12": {mine: false, flag: false, adjacentTiles: [6, 7, 8, 11, 13, 16, 17, 18]}},
    {"13": {mine: false, flag: false, adjacentTiles: [7, 8, 9, 12, 14, 17, 18, 19]}},
    {"14": {mine: false, flag: false, adjacentTiles: [8, 9, 13, 18, 19]}},
    {"15": {mine: false, flag: false, adjacentTiles: [10, 11, 16, 20, 21]}},
    {"16": {mine: false, flag: false, adjacentTiles: [10, 11, 12, 15, 17, 20, 21, 22]}},
    {"17": {mine: false, flag: false, adjacentTiles: [11, 12, 13, 16, 18, 21, 22, 23]}},
    {"18": {mine: false, flag: false, adjacentTiles: [12, 13, 14, 17, 19, 22, 23, 24]}},
    {"19": {mine: false, flag: false, adjacentTiles: [13, 14, 18, 23, 24]}},
    {"20": {mine: false, flag: false, adjacentTiles: [15, 16, 21]}},
    {"21": {mine: false, flag: false, adjacentTiles: [15, 16, 17, 20, 22]}},
    {"22": {mine: false, flag: false, adjacentTiles: [16, 17, 18, 21, 23]}},
    {"23": {mine: false, flag: false, adjacentTiles: [17, 18, 19, 22, 24]}},
    {"24": {mine: false, flag: false, adjacentTiles: [18, 19, 23]}},
];

let minesArr = [];
document.querySelector('main').addEventListener('contextmenu', (e) => {
    e.preventDefault()
    if (e.target.localName !== "div") {} else {
        tilesArr[e.target.id][e.target.id].flag = !tilesArr[e.target.id][e.target.id].flag
    }
    console.log(tilesArr)
})

function render() {
    minesArr = [];
    while (minesArr.length < 3) {
        let randBombTile
        function getrandBombTile() {
            randBombTile = Math.floor(Math.random() * tilesArr.length)
            return randBombTile
        }
        getrandBombTile()

        if (!minesArr.includes(randBombTile)) {
            minesArr.push(randBombTile)
        } 
    }
         
    minesArr.forEach(el => {
        tilesArr[el][el].mine = !tilesArr[el][el].mine
    }) 
    console.log(tilesArr)
}

    
