'use strict';

let elem = document.getElementById('elem');

function func(surname, name) {
    alert(this.value + ', ' + surname + " " + name);
}
func.call(elem, 'Filipev', 'Valery');