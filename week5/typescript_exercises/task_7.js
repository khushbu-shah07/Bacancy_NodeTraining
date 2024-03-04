"use strict";
/*
Exercise:

    Implement swap which receives 2 persons and returns them in
    the reverse order. The function itself is already
    there, actually. We just need to provide it with proper types.
    Also this function shouldn't necessarily be limited to just
    Person types, lets type it so that it works with any two types
    specified.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = void 0;
function logUser(user) {
    var pos = users.indexOf(user) + 1;
    console.log(" - #".concat(pos, " User: ").concat(user.name, ", ").concat(user.age, ", ").concat(user.occupation));
}
function logAdmin(admin) {
    var pos = admins.indexOf(admin) + 1;
    console.log(" - #".concat(pos, " Admin: ").concat(admin.name, ", ").concat(admin.age, ", ").concat(admin.role));
}
var admins = [
    {
        type: "admin",
        name: "Will Bruces",
        age: 30,
        role: "Overseer",
    },
    {
        type: "admin",
        name: "Steve",
        age: 40,
        role: "Steve",
    },
];
var users = [
    {
        type: "user",
        name: "Moses",
        age: 70,
        occupation: "Desert guide",
    },
    {
        type: "user",
        name: "Superman",
        age: 28,
        occupation: "Ordinary person",
    },
];
function swap(v1, v2) {
    return [v2, v1];
}
exports.swap = swap;
function test1() {
    console.log("test1:");
    var _a = swap(admins[0], users[1]), secondUser = _a[0], firstAdmin = _a[1];
    logUser(secondUser);
    logAdmin(firstAdmin);
}
function test2() {
    console.log("test2:");
    var _a = swap(users[0], admins[1]), secondAdmin = _a[0], firstUser = _a[1];
    logAdmin(secondAdmin);
    logUser(firstUser);
}
function test3() {
    console.log("test3:");
    var _a = swap(users[0], users[1]), secondUser = _a[0], firstUser = _a[1];
    logUser(secondUser);
    logUser(firstUser);
}
function test4() {
    console.log("test4:");
    var _a = swap(admins[1], admins[0]), firstAdmin = _a[0], secondAdmin = _a[1];
    logAdmin(firstAdmin);
    logAdmin(secondAdmin);
}
function test5() {
    console.log("test5:");
    var _a = swap(123, "Hello World"), stringValue = _a[0], numericValue = _a[1];
    console.log(" - String: ".concat(stringValue));
    console.log(" - Numeric: ".concat(numericValue));
}
[test1, test2, test3, test4, test5].forEach(function (test) { return test(); });
// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
// https://www.typescriptlang.org/docs/handbook/2/generics.html
