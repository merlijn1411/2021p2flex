class Player
{
    constructor(index)
    {
        this.dive = div;
        this.atTile = 0;
        this. className= document.getElementsByClassName("pawn" + index)[0];
        className.style.display = "block";

    }
}

class Tile
{
    constructor(div)
    {
        this.div = div;
        this.goto = -1;
    }
}

class Game
{
    constructor()
    {
        this.selectplayerDiv = document.getElementsByClassName("selectplayer")[0];
        this.winnerDiv = document.getElementsByClassName("winner")[0];
        this.playerturnDiv = document.getElementsByClassName("playerturn")[0];
        this.rollDiv = document.getElementsByClassName("roll")[0];
        this.mainDiv = document.getElementsByClassName("main")[0];
        this.boardDiv = document.getElementById("board");
        this.boardoverlayDiv = document.getElementsByClassName("selectplayer")[0];
        this.tile =[];
        this.players = [];
        this.playerturn = 0;
        this.setupBoard();
    }

    setupBoard()
    {
        //1 = right, 0 = up, 3 = left 
        let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 
                0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
                0, 1, 1, 1, 1, 1, 1, 1, 1, 1]

        let x = 0;
        let y = 10;
        let tileSize = 55;

        for	(var i = 0; i < path.length; i++)
        {
            console.log("test2");
            let cmd = path[i];
            if (cmd == 1)
            {
                //right
                x++;
            }
            else if (cmd == 3)
            {
                //left
                x--;
            }
            else if (cmd == 0)
            {
                //up
                y--;
            }

            let div = this.makeBoardDiv(x * tileSize, y * tileSize, i+1)

            let tile = new Tile(div);
            this.tile.push(tile);

        }
    }



    SetupGotos()
    {

    }

    Start(amountOffPlayers)
    {

    }

    moveToNextPlayer()
    {

    }

    draw()
    {

    }

    roll()
    {

    }

    setpawn(playerI, atTile)
    {

    }

    makeBoardDiv(x, y, tileDisplayNumber)
    {
        let div = document.createElement("div");

        div.className="tile";
        div.style.left = x + "px";
        div.style.top = y + "px";
        
        div.textContent = tileDisplayNumber;
        this.boardDiv.appendChild(div);

        return div;
    }

}

function init()
{
    let game = new Game();
}