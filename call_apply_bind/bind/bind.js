'use strict';

let elem = document.getElementById('elem');

function func(surname, name) {
    alert(this.value + ', ' + surname + ' ' + name);
}

let just = func.bind(elem);

just('Filipev', 'Valery');
just('Durov', 'Pavel');