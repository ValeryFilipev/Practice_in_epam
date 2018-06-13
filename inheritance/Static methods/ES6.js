'use strict';

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static createGuest() {
        return new User("Guest", "Of site");
    }
}

let user = User.createGuest();

alert( user.firstName );

alert( User.createGuest );