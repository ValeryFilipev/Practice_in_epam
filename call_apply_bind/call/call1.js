'use strict';

let elem = document.getElementById('elem');

function func() {
    alert(this.value);
}

func.call(elem);