function startgame(){
    gameloop()
}
let count = 0
var personVis = false
function gameloop(){
    personVis = !personVis
    if(personVis == true){
        var classToset = "character visible"
    }
    else{
        var classToset = "character hidden"
    }
    var gamezone = document.getElementById("gamezone")

    for(i=0; i<8; i++){
        gamezone.children[i].className = classToset
    }
    var randomNum = Math.floor(Math.random()*8) +1
    gamezone.children[randomNum-1].className = classToset + " naruto"
    count++
    if (count < 15){
        setTimeout(gameloop, 3000)
    }
    else{
        alert("Игра закончена")
    }
}