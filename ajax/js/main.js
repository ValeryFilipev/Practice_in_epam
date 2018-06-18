"use strict";

( function () {
    let drinkStorage = new AjaxStorage;

    let setDrinkName = document.getElementById("setDrinkName");
    let getDrinkInfo = document.getElementById("getDrinkInfo");
    let deleteDrinkInfo = document.getElementById("deleteDrinkInfo");
    let drinkList = document.getElementById("drinkList");
    let drinkInfoFrame = document.getElementById("drinkInfoFrame");

    drinkInfoFrame.classList.add("drinkInfoFrame");

    setDrinkName.onclick = function () {
        let inputInfo = prompt("Enter the name of the drink, please");
        let storeValue = {};

        storeValue.alcohol = confirm(inputInfo + " - Alcohol or not?\nok - alcohol\ncancel - non-alcoholic");
        storeValue.recipe = prompt("Describe a recipe of the drink - " + inputInfo);
        drinkStorage.addValue(inputInfo, storeValue);
    };

    getDrinkInfo.onclick = function () {
        let getDrink = prompt("Enter the name of the drink, please");
        let drinkInfoFrame = document.getElementById("drinkInfoFrame");
        let answer = drinkStorage.getValue(getDrink);

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
        let deleteDrinkInfo = prompt("Enter the name of the drink, please");
        let drinkInfoFrame = document.getElementById("drinkInfoFrame");

        if (drinkStorage.deleteValue(deleteDrinkInfo) === true) {
            drinkInfoFrame.innerHTML = "Successfully! Desired drink is deleted";
        } else {
            drinkInfoFrame.innerHTML = "There is such drink absent!";
        }
    };

    drinkList.onclick = function () {
        let drinkInfoFrame = document.getElementById("drinkInfoFrame");

        drinkInfoFrame.innerHTML = drinkStorage.getKeys();
    }
})();
