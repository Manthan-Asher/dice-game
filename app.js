var randomNumber1 = Math.random()

randomNumber1=randomNumber1*6;

randomNumber1=Math.floor(randomNumber1)

var images=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

document.querySelector(".dice .img1").setAttribute("src",images[randomNumber1])

var randomNumber2 = Math.random()

randomNumber2=randomNumber2*6;

randomNumber2=Math.floor(randomNumber2)

document.querySelector(".dice .img2").setAttribute("src",images[randomNumber2])


                            // OR 
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1<randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player 2 wins🚩"
    }
else if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML="🚩Player 1 wins"
    }
else 
    {
        document.querySelector("h1").innerHTML="Draw"
    }

