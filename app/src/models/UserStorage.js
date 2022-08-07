"use strict";

class UserStorage {
  static #users = { // static -> 정적, # -> 은닉화
    id: ["node255", "node256", "node257"],
    psword: ["123", "1234", "12345"],
    name: ["Kim", "Na", "Park"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;