function User(name) {
    this.name = name;
}

User.prototype.sayHi = function() {
    alert(this.name);
};