'use strict';

let colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let p_collect = document.getElementsByTagName('p');

/*function getRandom() {
    return (Math.random() * 10 - 5);//and different variations
}*/

let f1 = function() {
    let k = 0;

    return function() {
        this.style.color = colors[k];
        k++;

        if (k === colors.length){
            k = 0;
        }
    }
};

for (let i = 0; i < p_collect.length; i++) {
    p_collect[i].addEventListener('click', f1());
}

//colors.sort(getRandom);
//commented code for the second way to solve our task