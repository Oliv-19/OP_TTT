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
            domManager.h3Text=currentPlayer.playerName+ "'s turn" 
            return currentPlayer
        },
        changePlayerName: function(e){
            e.preventDefault()

            let formData = new FormData(domManager.form)
            this.playerOne.playerName= formData.get('player1')
            this.playerTwo.playerName= formData.get('player2')

            domManager.render()
            domManager.areaListener.abort()
        },

    }


    let currentPlayer = player.playerOne

    // console.log(currentPlayer.playerName+ ' turn')
    // console.log('enter cell number:')

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
        addPlay: function(e){
            if(e.target.className == 'cell'){
                let move = Number(e.target.id )

                
                if(!this.board.x.includes(move) &&!this.board.o.includes(move)){
                    this.board[currentPlayer.playerMarker].push(move)
                    domManager.render()

                    if(!this.checkWinner()){
                        player.changePlayer()
                        domManager.render()
                    }else{
                        this.gameOver()
                        domManager.render()
                    }
                        
                } else{
                    console.log('already used')
                }
            }
            
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
                    domManager.winnerText= currentPlayer.playerName+' WINS'
                    wins = true
                }
            })

            if(curPlayerArr.length == player.playerOne.maxMoves){
                console.log('its a draw')
                domManager.winnerText= "I'ts a draw"
                wins = true
            }
            return wins
        },
        gameOver: function(){
            domManager.h3Text='GAME OVER!'
            
            console.log('GAME OVER!')
            domManager.areaListener.abort()


        }



    }

    let domManager={
        head: document.querySelector('.head'),
        h3Text: '',
        winnerText: '',
        form: document.querySelector('#form'),
        cellContainer: document.querySelector('.cellContainer'),
        areaListener : new AbortController(),
        listeners:function(){
            this.form.addEventListener('submit',(e)=>{player.changePlayerName(e)}, {signal: this.areaListener.signal})
            this.cellContainer.addEventListener('click', (e)=>{gameboard.addPlay(e)}, {signal: this.areaListener.signal})
        },

        render: function(){
            let h3=this.head.children[0]
            h3.textContent = this.h3Text

            let h5=this.head.children[1]
            h5.textContent = this.winnerText
            
            let arr = gameboard.board[currentPlayer.playerMarker]

            arr.forEach(cellNum=>{
                let cell = this.cellContainer.children[cellNum-1]
                if(currentPlayer.playerMarker== 'x'){
                    cell.style.backgroundColor ='green'
                }else{
                    cell.style.backgroundColor ='blue'
                }

            })

        },

    }

   return domManager.listeners()
})()