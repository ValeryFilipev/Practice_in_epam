'use strict';

class Me {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {//during reading
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(newValue) {//during attribution
        [this.firstName, this.lastName] = newValue.split(' ');
    }

}

let user = new Me("Valery", "Filipev");
alert( user.fullName );

user.fullName = "Filipev Valery";
alert( user.fullName );