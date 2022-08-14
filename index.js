var num1=Math.random();
var randomNumber1 =Math.ceil(num1*6);
var image1=document.getElementsByClassName("image1")[0];
image1.setAttribute("src","../images/dice"+randomNumber1+".png");


var num2=Math.random();
var randomNumber2=Math.ceil(num2*6);
var image2=document.getElementsByClassName("image2")[0];
image2.setAttribute("src","../images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2)
{
document.querySelector("h1").innerHTML="player 1 wins <img src='../images/Web/icons8-triangular-flag-emoji-96.png'/>";
}
else if (randomNumber1<randomNumber2)
{

document.querySelector("h1").innerHTML="<img src='../images/Web/icons8-triangular-flag-emoji-96.png'/> player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}
