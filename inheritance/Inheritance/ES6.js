'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        alert("I walk: " + this.name);
    }
}

class Tiger extends Animal {
    walk() {
        super.walk();
        alert("...and jump!");
    }
}

new Tiger("John").walk();