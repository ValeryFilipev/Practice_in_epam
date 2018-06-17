'use strict';

let elem = document.getElementById('elem');

function func(surname, name) {
    alert(this.value + ', ' + surname + " " + name);
}

func.apply(elem, ['Filipev', 'Valery']);