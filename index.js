//for dice 1
var randomvar1=Math.floor(Math.random() * 6)+1;
var dicenum="dice"+randomvar1+".png";
var dice="images/"+dicenum;
var final=document.querySelector(".img1").setAttribute("src",dice);

//for dice 2
var randomvar2=Math.floor(Math.random() * 6)+1;
var dicenum1="dice"+randomvar2+".png";
var dice2="images/"+dicenum1;
var final2=document.querySelector(".img2").setAttribute("src",dice2);


if(randomvar1>randomvar2){
    document.querySelector("h1").innerHTML="you won playerr 1";

}

else if(randomvar1<randomvar2){
    document.querySelector("h1").innerHTML="you won player 2";

}

else{
    document.querySelector("h1").innerHTML="draw!";

}








