Minesweeper Game

The game container is comprised of 100 tiles arranged in a square playing area. 12 mines are randomly placed on the playing area. The player left clicks a tile to select that tile and right clicks the tile to place a flag on the tile. Placing a flag on a tile indicates that the player believes that the tile is a mine. Right clicking a tile with a flag on it removes that flag. Left clicking, or selecting a mine tile is a losing condition for the player while placing flags on the tiles that are mines wins the game.

The board is built by arranging clickable elements in a square.

The mines are randomly placed on the board. The location of each tile and whether it has a mine or not will be kept in an array of objects.

A click event (left click) is handled in one of two possible ways:

	If a non-mine tile is clicked and it contiguous to other non-mine files, all of the contiguous non-mine files will be exposed. Any non-mine tile that has been clicked or otherwise exposed will, if it is touching mine tiles, contain the number of mine files that it is touching.

	Clicking a mine tile, as stated before, immediately causes the player to lose the game.

A right click performs the following:

	Placing a flag on a tile, as stated before, indicates that the player believes that the tile is a mine. Right clicking a tile with a flag on it removes that flag. 

Placing flags on all of the mine tiles without clicking a mine tile wins the game.

Upon conclusion of the game the appropriate win/loss message appears in the footer. A 'restart game' button allows the player to play again if desired.

Screenshots

A win:

<img src="./imgs/win.png>

A loss:

<img src="./imgs/loss.png>

The flood feature:

<img src="./imgs/flood.png>

Technologies used:

HTML, CSS, and Javascript were used to create this game.

Getting started

Instructions are in the introduction.

Next steps

A header will be placed at the top of the page. It will have the number of flags planted and elapsed time in it. Also I will style the game so that it looks nicer.