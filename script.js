let game= (function(){
    

    console.log('enter cell number:')
    
    let player ={
        playerOne: {
            playerName: 'Player 1',
            playerMarker : 'x'
        },
        playerTwo:{
            playerName: 'Player 2',
            playerMarker : 'o'
        }
    }

    let currentPlayer = player.playerOne

    function changePlayer(){
        if(currentPlayer== player.playerOne){
            currentPlayer=player.playerTwo
        }else{
            currentPlayer= player.playerOne
        }
        return currentPlayer
    }
    
    let gameboard={
        board: {
           x:[],
           o:[]
        },
        

        addPlay: function(move){
            //let currentPlayer = playerController()
            //console.log(currentPlayer.playerMarker)
            if(move != this.board.x && move != this.board.o){
                
                this.board[currentPlayer.playerMarker].push(move)
            } else{
                console.log('already used')
            }
            
            //console.log(move)
            console.table(this.board)
            changePlayer()
        },
        checkWinner: function(){
            
        }
        
        
    }

    
    
    
    return {}
})()