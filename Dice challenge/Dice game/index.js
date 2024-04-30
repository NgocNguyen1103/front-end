function result(a,b){
    if (a > b){
        document.querySelector('h1').innerHTML = "Player 1 win";
    }
    else if(a < b ){
        document.querySelector("h1").innerHTML = "Player 2 win";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw";
    }
}

function roll1(a){
   
        document.getElementById("dice1").src = "./images/dice" + a + ".png";

}

function roll2(a){
        document.getElementById("dice2").src = "./images/dice" + a + ".png";
}


function main(){
    var Player1 = Math.floor((Math.random() * 6)) + 1;
    var Player2 = Math.floor((Math.random() * 6)) + 1;
    result(Player1,Player2);
    roll1(Player1);
    roll2(Player2);
}

main();