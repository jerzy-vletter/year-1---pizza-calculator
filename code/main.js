// JavaScript source code

const smallPrice = 2;
const mediumPrice = 4;
const largePrice = 6;


//loads functions assosiated with the first button press when page is loaded
function FirstCallSet() {
    pizzaPrompt();
    removeStartButton();
    createTryAgainButton();
}

//setting up the prompts to get the values required
function pizzaPrompt() {
    var small = prompt("pls enter the amount of small pizza's you want", "amount");
    var medium = prompt("pls enter the amount of medium pizza's you want", "amount");
    var large = prompt("pls enter the amount of large pizza's you want", "amount");

    if (small == null || medium == null || large == null)  {
        ErrorMsg();
        return;
    }
    else if (isNaN(small) == true || isNaN(medium) == true || isNaN(large) == true) {
        ErrorMsg2();
        return;
    }
    else {
        priceCalculation(small, medium, large);
    }
}

//calculations for prices + setting the innerHTML for the result text
function priceCalculation(small, medium, large) {
    var resultSmall = small * smallPrice;
    var resultMedium = medium * mediumPrice;
    var resultLarge = large * largePrice;
    var totalPrice = resultSmall + resultMedium + resultLarge;

    document.getElementById("textSmall").innerHTML = "total price for " + small + " small pizza's = " + resultSmall + " euro";
    document.getElementById("textMedium").innerHTML = "total price for " + medium + " medium pizza's = " + resultMedium + " euro";
    document.getElementById("textLarge").innerHTML = "total price for " + large + " large pizza's = " + resultLarge + " euro";
    document.getElementById("totalPrice").innerHTML = "total price for " + small + " small pizza's + " + medium + " medium pizza's + " + large + " large pizza's = " + totalPrice + " euro"
};

//deletes the start button for a nice a clean screen
function removeStartButton() {
    var StartButton = document.getElementById("startButton");
    StartButton.parentNode.removeChild(StartButton);
    return false;
};

//creates a try again button so the code can be used multible times without reloading the page
function createTryAgainButton() {
    var tryAgainButton = document.createElement("input");
    tryAgainButton.setAttribute("type", "button");
    tryAgainButton.setAttribute("value", "try again");
    tryAgainButton.onclick = repeatingCallSet;
    document.getElementsByTagName("body").item(0).appendChild(tryAgainButton);

};

//loads functions assosiated with ever button press that isn't the first one of the load
function repeatingCallSet() {
    textWipe();
    pizzaPrompt();
};

//error msg for when a browser has a cancel button on their prompts (looking at your firefox)
function ErrorMsg() {
    document.getElementById("error").innerHTML = "It seems you have pressed the cancel button on the prompt, this makes me sad :("

}

//error msg for when someone doesn't put in a int value or leaves the placeholder inplace
function ErrorMsg2() {
    document.getElementById("error2").innerHTML = "it seems you have put in some text instead of a number, pls put in a number text confuses me :("
}

//text wipe so no other text from old loads interfiers with the current load
function textWipe() {
    document.getElementById("error").innerHTML = " "
    document.getElementById("error2").innerHTML = " "
    document.getElementById("textSmall").innerHTML = " "
    document.getElementById("textMedium").innerHTML = " "
    document.getElementById("textLarge").innerHTML = " "
    document.getElementById("totalPrice").innerHTML = " "
   
};