"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const client = this.body;
    const { id, psword } = UserStorage.getUserInfo(client.id);
    
    if(id) {
      if(id === client.id && psword === client.psword) {
        return { success: true };
      }
      return { success: false, msg: "wrong PASSWORD"};
    }
    return { success: false, msg: "undefined ID"};
  }

  register() {
    const client = this.body;
    const response = UserStorage.save(client);
    return response;
  }
}

module.exports = User;