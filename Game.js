class Game{
    constructor(){}
    display(){

        getState();{
            var game1=database.ref('gameState')
            game1.on("value",function(data){
                game1= data.val()
            })
        }
            
    }

        update(state){
            database.ref('/').update({
                gameState:state
            })
        }


    start(){
        if(gameState===0){
            food=new Food()
            food.display()
            
            feed=new Feeder()
            feed.display()
            
            
        }

       
    }

    }
