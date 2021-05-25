var randomNumber1=Math.floor(Math.random()*6)+1; //1-6
var randomDiceImage1Source="images/dice"+randomNumber1+".png";//images/dice1.png-images/xdice6.png

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage1Source);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2Source="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2Source);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
