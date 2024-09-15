


function Player(player, marker){
    this.player = player
    this.marker = marker
}

let game = (function(){
    let GameBoard = {
        gameboard:[]
    }

    //Dom
    cellContainer = document.querySelector('.cellContainer')

    //events
    cellContainer.addEventListener('click', (e)=>{_cellClick(e)})

    _render()

    function _render(){

        cells = cellContainer.children

        for(let i=0; i< cells.length; i++){
            cells[i].id= i+1
            GameBoard.gameboard.push(cells[i])
            //GameBoard[i] = cells[i]
        }
        
        console.log(GameBoard)
    }
    
})()