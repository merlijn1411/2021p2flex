





class MijnClass
{
    constructor()
    {
        this.dive = div;
        this.atTile = 0;
        this. className= document.getElementsByClassName("pawn" + index)[0];
        className.style.display = "block";

    }
    mijnFunctie(a, b)
    {
        return a + b;
    }
}

class tile
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
        this.boardDiv = document.getElementsByClassName("board")[0];
        this.boardoverlayDiv = document.getElementsByClassName("selectplayer")[0];

        this.tile =[];
        this.players = [];
        this.playerturn = 0;
    }
}