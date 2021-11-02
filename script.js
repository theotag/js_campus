/** 
player1 = prompt("player1 rock paper or cisor")
compu = prompt("compu rock paper or cisor")

if(player1.tolowercase() === compu.tolowercase()){
    console.log("it's a tie !");
}else if(player1.tolowercase() === "rock"){
    if(compu.tolowercase() === "paper"){
        console.log("compu win !");
    }else{
        console.log("player1 win !");
    }
}else if(player1.tolowercase() === "paper"){
    if(compu. === "cisor"){
        console.log("compu win !");
    }else{
        console.log("player1 win !");
    }
}else if(player1.tolowercase() === "cisor"){
    if(compu.tolowercase() === "rock"){
        console.log("compu win !");
    }else{
        console.log("player1 win !");
    }
}*/
let number = 31

while (true) {
    let guess = prompt("choose number")
    if (parseInt(guess) === number){
        console.log("win")
        break;
    }
    console.log("wrong number")
    if (parseInt(guess) > number){
        console.log("too big")
    }else {
        console.log("too small")
    }
}