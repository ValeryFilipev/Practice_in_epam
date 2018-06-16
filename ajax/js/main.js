"use strict";

( function () {
    var drinkStorage = new AjaxStorage;

    var setDrinkName = document.getElementById("setDrinkName");
    var getDrinkInfo = document.getElementById("getDrinkInfo");
    var deleteDrinkInfo = document.getElementById("deleteDrinkInfo");
    var drinkList = document.getElementById("drinkList");
    var drinkInfoFrame = document.getElementById("drinkInfoFrame");

    drinkInfoFrame.classList.add("drinkInfoFrame");

    setDrinkName.onclick = function () {
        var inputInfo = prompt("Enter the name of the drink, please");
        var storeValue = {};

        storeValue.alcohol = confirm(inputInfo + " - Alcohol or not?\nok - alcohol\ncancel - non-alcoholic");
        storeValue.recipe = prompt("Describe a recipe of the drink - " + inputInfo);
        drinkStorage.addValue(inputInfo, storeValue);
    };

    getDrinkInfo.onclick = function () {
        var getDrink = prompt("Enter the name of the drink, please");
        var drinkInfoFrame = document.getElementById("drinkInfoFrame");
        var answer = drinkStorage.getValue(getDrink);

        if (drinkStorage.getValue(getDrink) !== undefined) {
            drinkInfoFrame.style.height = "auto";
            drinkInfoFrame.innerHTML = "The name of the drink: " + getDrink +
                "<br>" + "Alcohol: " + (answer.alcohol === true ? "yes" : "no") +
                "<br>" + "Recipe: " + (answer.recipe ? answer.recipe : "Unfortunately, there's no recipe");
        } else {
            drinkInfoFrame.innerHTML = "There is no drinks!!!";
        }
    };

    deleteDrinkInfo.onclick = function () {
        var deleteDrinkInfo = prompt("Enter the name of the drink, please");
        var drinkInfoFrame = document.getElementById("drinkInfoFrame");

        if (drinkStorage.deleteValue(deleteDrinkInfo) === true) {
            drinkInfoFrame.innerHTML = "Successfully! Desired drink is deleted";
        } else {
            drinkInfoFrame.innerHTML = "There is such drink absent!";
        }
    };

    drinkList.onclick = function () {
        var drinkInfoFrame = document.getElementById("drinkInfoFrame");

        drinkInfoFrame.innerHTML = drinkStorage.getKeys();
    }
})();