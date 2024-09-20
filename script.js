let game= (function(){
    
    
    
    let player ={
        playerOne: {
            playerName: 'Player 1',
            playerMarker : 'x',
            maxMoves: 5
        },
        playerTwo:{
            playerName: 'Player 2',
            playerMarker : 'o',
            maxMoves: 4
        },
        changePlayer:function (){
            if(currentPlayer== this.playerOne){
                currentPlayer=this.playerTwo
            }else{
                currentPlayer= this.playerOne
            }
            return currentPlayer
        }

    }

    let currentPlayer = player.playerOne

    console.log(currentPlayer.playerName+ ' turn')
    console.log('enter cell number:')
    
    let gameboard={
        board: {
           x:[],
           o:[]
        },
        restart: function(){
            currentPlayer = player.playerOne
            this.board.x=this.board.x.splice(0, this.board.x) 
            this.board.o=this.board.o.splice(0, this.board.o) 

        },

        addPlay: function(move){
            if(!this.board.x.includes(move) &&!this.board.o.includes(move)){
                this.board[currentPlayer.playerMarker].push(move)
                if(!this.checkWinner()){
                    player.changePlayer()
                }
                 
            } else{
                console.log('already used')
            }
            
            //console.log(move)
            console.table(this.board)
            console.log(currentPlayer.playerName+ ' turn')
            console.log('enter cell number:')
            
        },
        checkWinner: function(){
            curPlayerArr=this.board[currentPlayer.playerMarker]

            let winsOP =[
                [1,2,3],
                [4,5,6],
                [7,8,9],

                [1,4,7],
                [2,5,8],
                [3,6,9],

                [1,5,9],
                [7,5,3],
            ]

            let wins = false
            
            
            winsOP.forEach((array)=>{
                let arr=[]
            
                curPlayerArr.forEach(element => {
                    if(array.includes(element)){
                        arr.push(element)
                    }
                });

                if( arr.length == 3){
                    console.log(currentPlayer.playerName+' WINS')
                    wins = true
                    this.restart()
                    //return true
                } 
            })

            if(curPlayerArr.length == player.playerOne.maxMoves){
                console.log('its a draw')
                wins = true
                this.restart()
                //return
            }
            //console.log(draw)
            
            return wins
        },
        
        
        
    }

    
    
    function gameController(){
        
    }
    return {makeMove: function(move){gameboard.addPlay(move)}}
})()