const tilesArr = [
    {"0": {mine: false, flag: false, isRevealed: false, adjacentTiles: [1, 10, 11]}},
    {"1": {mine: false, flag: false, isRevealed: false, adjacentTiles: [0, 2, 10, 11, 12]}},
    {"2": {mine: false, flag: false, isRevealed: false, adjacentTiles: [1, 3, 11, 12, 13]}},
    {"3": {mine: false, flag: false, isRevealed: false, adjacentTiles: [2, 4, 12, 13, 14]}},
    {"4": {mine: false, flag: false, isRevealed: false, adjacentTiles: [3, 5, 13, 14, 15]}},
    {"5": {mine: false, flag: false, isRevealed: false, adjacentTiles: [4, 6, 14, 15, 16]}},
    {"6": {mine: false, flag: false, isRevealed: false, adjacentTiles: [5, 7, 15, 16, 17]}},
    {"7": {mine: false, flag: false, isRevealed: false, adjacentTiles: [6, 8, 16, 17, 18]}},
    {"8": {mine: false, flag: false, isRevealed: false, adjacentTiles: [7, 9, 17, 18, 19]}},
    {"9": {mine: false, flag: false, isRevealed: false, adjacentTiles: [8, 18, 19]}},
    {"10": {mine: false, flag: false, isRevealed: false, adjacentTiles: [0, 1, 11, 20, 21]}},
    {"11": {mine: false, flag: false, isRevealed: false, adjacentTiles: [0, 1, 2, 10, 12, 20, 21, 22]}},
    {"12": {mine: false, flag: false, isRevealed: false, adjacentTiles: [1, 2, 3, 11, 13, 21, 22, 23]}},
    {"13": {mine: false, flag: false, isRevealed: false, adjacentTiles: [2, 3, 4, 12, 14, 22, 23, 24]}},
    {"14": {mine: false, flag: false, isRevealed: false, adjacentTiles: [3, 4, 5, 13, 15, 23, 24, 25]}},
    {"15": {mine: false, flag: false, isRevealed: false, adjacentTiles: [4, 5, 6, 14, 16, 24, 25, 26]}},
    {"16": {mine: false, flag: false, isRevealed: false, adjacentTiles: [5, 6, 7, 15, 17, 25, 26, 27]}},
    {"17": {mine: false, flag: false, isRevealed: false, adjacentTiles: [6, 7, 8, 16, 18, 26, 27, 28]}},
    {"18": {mine: false, flag: false, isRevealed: false, adjacentTiles: [7, 8, 9, 17, 19, 27, 28, 29]}},
    {"19": {mine: false, flag: false, isRevealed: false, adjacentTiles: [8, 9, 18, 28, 29]}},
    {"20": {mine: false, flag: false, isRevealed: false, adjacentTiles: [10, 11, 21, 30, 31]}},
    {"21": {mine: false, flag: false, isRevealed: false, adjacentTiles: [10, 11, 12, 20, 22, 30, 31, 32]}},
    {"22": {mine: false, flag: false, isRevealed: false, adjacentTiles: [11, 12, 13, 21, 23, 31, 32, 33]}},
    {"23": {mine: false, flag: false, isRevealed: false, adjacentTiles: [12, 13, 14, 22, 24, 32, 33, 34]}},
    {"24": {mine: false, flag: false, isRevealed: false, adjacentTiles: [13, 14, 15, 23, 25, 33, 34, 35]}},
    {"25": {mine: false, flag: false, isRevealed: false, adjacentTiles: [14, 15, 16, 24, 26, 34, 35, 36]}},
    {"26": {mine: false, flag: false, isRevealed: false, adjacentTiles: [15, 16, 17, 25, 27, 35, 36, 37]}},
    {"27": {mine: false, flag: false, isRevealed: false, adjacentTiles: [16, 17, 18, 26, 28, 36, 37, 38]}},
    {"28": {mine: false, flag: false, isRevealed: false, adjacentTiles: [17, 18, 19, 27, 29, 37, 38, 39]}},
    {"29": {mine: false, flag: false, isRevealed: false, adjacentTiles: [18, 19, 28, 38, 39]}},
    {"30": {mine: false, flag: false, isRevealed: false, adjacentTiles: [20, 21, 31, 40, 41]}},
    {"31": {mine: false, flag: false, isRevealed: false, adjacentTiles: [20, 21, 22, 30, 32, 40, 41, 42]}},
    {"32": {mine: false, flag: false, isRevealed: false, adjacentTiles: [21, 22, 23, 31, 33, 41, 42, 43]}},
    {"33": {mine: false, flag: false, isRevealed: false, adjacentTiles: [22, 23, 24, 32, 34, 42, 43, 44]}},
    {"34": {mine: false, flag: false, isRevealed: false, adjacentTiles: [23, 24, 25, 33, 35, 43, 44, 45]}},
    {"35": {mine: false, flag: false, isRevealed: false, adjacentTiles: [24, 25, 26, 34, 36, 44, 45, 46]}},
    {"36": {mine: false, flag: false, isRevealed: false, adjacentTiles: [25, 26, 27, 35, 37, 45, 46, 47]}},
    {"37": {mine: false, flag: false, isRevealed: false, adjacentTiles: [26, 27, 28, 36, 38, 46, 47, 48]}},
    {"38": {mine: false, flag: false, isRevealed: false, adjacentTiles: [27, 28, 29, 37, 39, 47, 48, 49]}},
    {"39": {mine: false, flag: false, isRevealed: false, adjacentTiles: [28, 29, 38, 48, 49]}},
    {"40": {mine: false, flag: false, isRevealed: false, adjacentTiles: [30, 31, 41, 50, 51]}},
    {"41": {mine: false, flag: false, isRevealed: false, adjacentTiles: [30, 31, 32, 40, 42, 50, 51, 52]}},
    {"42": {mine: false, flag: false, isRevealed: false, adjacentTiles: [31, 32, 33, 41, 43, 51, 52, 53]}},
    {"43": {mine: false, flag: false, isRevealed: false, adjacentTiles: [32, 33, 34, 42, 44, 52, 53, 54]}},
    {"44": {mine: false, flag: false, isRevealed: false, adjacentTiles: [33, 34, 35, 43, 45, 53, 54, 55]}},
    {"45": {mine: false, flag: false, isRevealed: false, adjacentTiles: [34, 35, 36, 44, 46, 54, 55, 56]}},
    {"46": {mine: false, flag: false, isRevealed: false, adjacentTiles: [35, 36, 37, 45, 47, 55, 56, 57]}},
    {"47": {mine: false, flag: false, isRevealed: false, adjacentTiles: [36, 37, 38, 46, 48, 56, 57, 58]}},
    {"48": {mine: false, flag: false, isRevealed: false, adjacentTiles: [37, 38, 39, 47, 49, 57, 58, 59]}},
    {"49": {mine: false, flag: false, isRevealed: false, adjacentTiles: [38, 39, 48, 58, 59]}},
    {"50": {mine: false, flag: false, isRevealed: false, adjacentTiles: [40, 41, 51, 60, 61]}},
    {"51": {mine: false, flag: false, isRevealed: false, adjacentTiles: [40, 41, 42, 50, 52, 60, 61, 62]}},
    {"52": {mine: false, flag: false, isRevealed: false, adjacentTiles: [41, 42, 43, 51, 53, 61, 62, 63]}},
    {"53": {mine: false, flag: false, isRevealed: false, adjacentTiles: [42, 43, 44, 52, 54, 62, 63, 64]}},
    {"54": {mine: false, flag: false, isRevealed: false, adjacentTiles: [43, 44, 45, 53, 55, 63, 64, 65]}},
    {"55": {mine: false, flag: false, isRevealed: false, adjacentTiles: [44, 45, 46, 54, 56, 64, 65, 66]}},
    {"56": {mine: false, flag: false, isRevealed: false, adjacentTiles: [45, 46, 47, 55, 57, 65, 66, 67]}},
    {"57": {mine: false, flag: false, isRevealed: false, adjacentTiles: [46, 47, 48, 56, 58, 66, 67, 68]}},
    {"58": {mine: false, flag: false, isRevealed: false, adjacentTiles: [47, 48, 49, 57, 59, 67, 68, 69]}},
    {"59": {mine: false, flag: false, isRevealed: false, adjacentTiles: [48, 49, 58, 68, 69]}},
    {"60": {mine: false, flag: false, isRevealed: false, adjacentTiles: [50, 51, 61, 70, 71]}},
    {"61": {mine: false, flag: false, isRevealed: false, adjacentTiles: [50, 51, 52, 60, 62, 70, 71, 72]}},
    {"62": {mine: false, flag: false, isRevealed: false, adjacentTiles: [51, 52, 53, 61, 63, 71, 72, 73]}},
    {"63": {mine: false, flag: false, isRevealed: false, adjacentTiles: [52, 53, 54, 62, 64, 72, 73, 74]}},
    {"64": {mine: false, flag: false, isRevealed: false, adjacentTiles: [53, 54, 55, 63, 65, 73, 74, 75]}},
    {"65": {mine: false, flag: false, isRevealed: false, adjacentTiles: [54, 55, 56, 64, 66, 74, 75, 76]}},
    {"66": {mine: false, flag: false, isRevealed: false, adjacentTiles: [55, 56, 57, 65, 67, 75, 76, 77]}},
    {"67": {mine: false, flag: false, isRevealed: false, adjacentTiles: [56, 57, 58, 66, 68, 76, 77, 78]}},
    {"68": {mine: false, flag: false, isRevealed: false, adjacentTiles: [57, 58, 59, 67, 69, 77, 78, 79]}},
    {"69": {mine: false, flag: false, isRevealed: false, adjacentTiles: [58, 59, 68, 78, 79]}},
    {"70": {mine: false, flag: false, isRevealed: false, adjacentTiles: [60, 61, 71, 80, 81]}},
    {"71": {mine: false, flag: false, isRevealed: false, adjacentTiles: [60, 61, 62, 70, 72, 80, 81, 82]}},
    {"72": {mine: false, flag: false, isRevealed: false, adjacentTiles: [61, 62, 63, 71, 73, 81, 82, 83]}},
    {"73": {mine: false, flag: false, isRevealed: false, adjacentTiles: [62, 63, 64, 72, 74, 82, 83, 84]}},
    {"74": {mine: false, flag: false, isRevealed: false, adjacentTiles: [63, 64, 65, 73, 75, 83, 84, 85]}},
    {"75": {mine: false, flag: false, isRevealed: false, adjacentTiles: [64, 65, 66, 74, 76, 84, 85, 86]}},
    {"76": {mine: false, flag: false, isRevealed: false, adjacentTiles: [65, 66, 67, 75, 77, 85, 86, 87]}},
    {"77": {mine: false, flag: false, isRevealed: false, adjacentTiles: [66, 67, 68, 76, 78, 86, 87, 88]}},
    {"78": {mine: false, flag: false, isRevealed: false, adjacentTiles: [67, 68, 69, 77, 79, 87, 88, 89]}},
    {"79": {mine: false, flag: false, isRevealed: false, adjacentTiles: [68, 69, 78, 88, 89]}},
    {"80": {mine: false, flag: false, isRevealed: false, adjacentTiles: [70, 71, 81, 90, 91]}},
    {"81": {mine: false, flag: false, isRevealed: false, adjacentTiles: [70, 71, 72, 80, 82, 90, 91, 92]}},
    {"82": {mine: false, flag: false, isRevealed: false, adjacentTiles: [71, 72, 73, 81, 83, 91, 92, 93]}},
    {"83": {mine: false, flag: false, isRevealed: false, adjacentTiles: [72, 73, 74, 82, 84, 92, 93, 94]}},
    {"84": {mine: false, flag: false, isRevealed: false, adjacentTiles: [73, 74, 75, 83, 85, 93, 94, 95]}},
    {"85": {mine: false, flag: false, isRevealed: false, adjacentTiles: [74, 75, 76, 84, 86, 94, 95, 96]}},
    {"86": {mine: false, flag: false, isRevealed: false, adjacentTiles: [75, 76, 77, 85, 87, 95, 96, 97]}},
    {"87": {mine: false, flag: false, isRevealed: false, adjacentTiles: [76, 77, 78, 86, 88, 96, 97, 98]}},
    {"88": {mine: false, flag: false, isRevealed: false, adjacentTiles: [77, 78, 79, 87, 89, 97, 98, 99]}},
    {"89": {mine: false, flag: false, isRevealed: false, adjacentTiles: [78, 79, 88, 98, 99]}},
    {"90": {mine: false, flag: false, isRevealed: false, adjacentTiles: [80, 81, 91]}},
    {"91": {mine: false, flag: false, isRevealed: false, adjacentTiles: [80, 81, 82, 90, 92]}},
    {"92": {mine: false, flag: false, isRevealed: false, adjacentTiles: [81, 82, 83, 91, 93]}},
    {"93": {mine: false, flag: false, isRevealed: false, adjacentTiles: [82, 83, 84, 92, 94]}},
    {"94": {mine: false, flag: false, isRevealed: false, adjacentTiles: [83, 84, 85, 93, 95]}},
    {"95": {mine: false, flag: false, isRevealed: false, adjacentTiles: [84, 85, 86, 94, 96]}},
    {"96": {mine: false, flag: false, isRevealed: false, adjacentTiles: [85, 86, 87, 95, 97]}},
    {"97": {mine: false, flag: false, isRevealed: false, adjacentTiles: [86, 87, 88, 96, 98]}},
    {"98": {mine: false, flag: false, isRevealed: false, adjacentTiles: [87, 88, 89, 97, 99]}},
    {"99": {mine: false, flag: false, isRevealed: false, adjacentTiles: [88, 89, 98]}},
];

let minesArr = [];
let flagsNumArr = [];
let seconds = 0;

function renderTime() {
    if (seconds > 59) {
        document.getElementById('seconds').textContent = `${Math.floor(seconds / 60)}:${(seconds % 60) < 10 ? "0" + (seconds % 60) : seconds % 60}`
    } else {
        document.getElementById('seconds').textContent = seconds;
    }
}

const interval = setInterval(timeKeeper, 1000)

function timeKeeper() {
    seconds++;
    renderTime()
}


document.querySelector('main').addEventListener('contextmenu', (e) => {
    e.preventDefault()

    const flagImgPath = './imgs/flag.png';
    const blankImgPath = './imgs/blank.jpeg';
    if (!tilesArr[e.target.id][e.target.id].isRevealed) {
        if (e.target.localName === "div" || e.target.localName === "img") {
            
        if (flagsNumArr.length < 12) {
            tilesArr[e.target.id][e.target.id].flag = !tilesArr[e.target.id][e.target.id].flag
            
            console.log(tilesArr[e.target.id][e.target.id])
            if (tilesArr[e.target.id][e.target.id].flag === true) {
                document.getElementById(e.target.id).innerHTML = `<img src=${flagImgPath} id=${e.target.id}>`
                flagsNumArr.push(true)

            } else {
                document.getElementById(e.target.id).innerHTML = `<img src=${blankImgPath} id=${e.target.id}`
                flagsNumArr.pop()
            }
        } else if (flagsNumArr.length === 12) {
            
            if (tilesArr[e.target.id][e.target.id].flag === true) {
                tilesArr[e.target.id][e.target.id].flag = !tilesArr[e.target.id][e.target.id].flag
                
                document.getElementById(e.target.id).innerHTML = `<img src=${blankImgPath} id=${e.target.id}`
                flagsNumArr.pop()
            } else {}
        }
            checkFlagNum()
            checkForWin()
        } 
    }
})

function checkFlagNum() {
    document.getElementById('num-flags').textContent = `${flagsNumArr.length}`
}

document.querySelector('main').addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.localName === "div" || e.target.localName === "img") {

        if (tilesArr[e.target.id][e.target.id].flag === true) {}

        else if (tilesArr[e.target.id][e.target.id].mine === true) {

            document.getElementById(e.target.id).innerHTML = `<img src=./imgs/explosion.jpeg id=${e.target.id}>`

            endGameLoss()

        } else if (tilesArr[e.target.id][e.target.id].mine === false) {

            tilesArr[e.target.id][e.target.id].isRevealed = true
            let adjacentTiles = tilesArr[e.target.id][e.target.id].adjacentTiles
            let adjacentTileMineCount = 0;

            for (let tile of adjacentTiles) {

                if (tilesArr[tile][tile].mine === true) {
                    adjacentTileMineCount += 1;
                }
            }

            if (adjacentTileMineCount > 0) {

                document.getElementById(e.target.id).innerHTML = `<img src=./imgs/${adjacentTileMineCount}.png id=${e.target.id}>`
                return

            } else {
                let currentId = Object.keys(tilesArr[e.target.id])[0];

                let mineValue = (tilesArr[currentId[0]][currentId[0]].mine);

                floodFill(currentId)

            }
        }}
    })

    document.querySelector('#restart-game').addEventListener('click', (e) => {
        e.preventDefault()
        window.location.reload()
        initialize()
    })

    function floodFill(id) {
        tilesArr[id][id].isRevealed = true
        document.getElementById(id).style.backgroundColor = '#EADFF8'
        
        for (let item of tilesArr[id][id].adjacentTiles) {

            if (!tilesArr[item][item].isRevealed) {

                adjacentTiles = tilesArr[item][item].adjacentTiles
                adjacentTileMineCount = 0;

                for (let tile of adjacentTiles) {
                    
                    if (tilesArr[tile][tile].mine) {
                        adjacentTileMineCount ++
                    }
                }
                if (adjacentTileMineCount > 0) {
                    document.getElementById(item).innerHTML = `<img src=./imgs/${adjacentTileMineCount}.png id=${item}>`
                    tilesArr[item][item].isRevealed = true
                    
                } else {
                    document.getElementById(item).style.backgroundColor = '#EADFF8'
                    tilesArr[item][item].isRevealed = true                      
                    floodFill(item)
                }
            }
        }
    }
function endGameLoss() {

    for (let item of tilesArr) {

        const key = Object.keys(item)[0];

        if (item[key].flag) {}

        else if (item[key].mine) {

            document.getElementById(key).innerHTML = `<img src=./imgs/mine.png id=${key}>`

        } else if (!item[key].flag || !item[key].mine) {

            let adjacentTiles = item[key].adjacentTiles
            let adjacentTileMineCount = 0;

            for (let tile of adjacentTiles) {
                if (tilesArr[tile][tile].mine === true) {
                    adjacentTileMineCount ++
                }
            }
            
            if (adjacentTileMineCount > 0) {
                document.getElementById(key).innerHTML = `<img src=./imgs/${adjacentTileMineCount}.png>`
            }
        }
    }
    clearInterval(interval)
    document.getElementById("message").innerText = "You lose"
}

function endGameWin() {
    clearInterval(interval)
    const time = renderTime()
    document.getElementById("message").innerText = `You win! ${Math.floor(seconds / 60)}:${(seconds % 60) < 10 ? "0" + (seconds % 60) : seconds % 60}`   
}
function initialize() {

    minesArr = [];

    while (minesArr.length < 12) {
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

    minesArr.forEach(mine => {
        tilesArr[mine][mine].mine = true
        
    })
}

function checkForWin() {

    let winArr = [];

    minesArr.forEach(mine => {
        if (tilesArr[mine][mine].mine === tilesArr[mine][mine].flag) {
            winArr.push(true)
        
        }

        if (winArr.length === minesArr.length) {
            endGameWin()
        }
    })
}

initialize()   
