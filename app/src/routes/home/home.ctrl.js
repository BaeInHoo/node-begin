"use strict";

const output = {
  hello : (req, res) => {
    res.render('home/index');
  },
  login : (req, res) => {
    res.render('home/login');
  }
}

const users = {
  id: ["node265", "node266", "node267"],
  psword: ["123", "1234", "12345"]
}

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "login fail",
    });
  },
};

module.exports = {
  output,
  process
};