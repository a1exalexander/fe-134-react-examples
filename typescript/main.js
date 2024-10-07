"use strict";
let userName = null;
userName = 'Sashko';
const API_URL = 'https://api.mysite.com';
const user = {
    firstName: 'John',
    lastName: 'Wick',
};
const getUser = (override) => {
    return Object.assign(Object.assign({}, user), override);
};
const user2 = getUser();
const arrayOfStrings = ['2', 'text'];
const arrayOfNumbers = [2, 123, 343];
const arrayOfStrignAndNumbers = [1, '2'];
const arrayOfUsers = [];
arrayOfUsers.push({
    firstName: 'asd',
    lastName: 'asdasd'
});
