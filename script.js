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
           x:[1, 2],
           o:[4,5]
        },
        

        addPlay: function(move){
            if(move != this.board.x && move != this.board.o){
                this.board[currentPlayer.playerMarker].push(move)
                this.checkWinner() 
                changePlayer()
            } else{
                console.log('already used')
            }
            
            //console.log(move)
            console.table(this.board)
            
            
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
            
            winsOP.forEach((array)=>{
                let arr=[]
            
                curPlayerArr.forEach(element => {
                    if(array.includes(element)){
                        arr.push(element)
                    }
                });

                if( arr.length == 3){
                    console.log(currentPlayer.playerName+' WINS')
                    return true
                } 
            })
            

        }
        
        
    }

    
    
    function gameController(){
        
        // move.forEach(key => {
            
        // });

        
        //return {}
    }

    //console.log()
    return { gameboard}
})()