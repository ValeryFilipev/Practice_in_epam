(function () {
    'use strict';

    let input = document.querySelectorAll('input');
    let prev = document.querySelectorAll('.prev');
    let next = document.querySelectorAll('.next');

    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('change', (function () {
            let arr = [];
            return function () {
                arr.push(this.value);
                let j = arr.length - 1;
                prev[i].addEventListener('click', function () {

                    if (j > 0) {
                        j--;
                        input[i].value = arr[j];
                    } else {
                        input[i].value = '';
                    }
                });
                next[i].addEventListener('click', function () {
                    if (j < arr.length - 1) {
                        input[i].value = arr[j];
                        j++;
                    } else {
                        input[i].value = arr[arr.length - 1];
                    }
                })
            }
        })())
    }
}());
