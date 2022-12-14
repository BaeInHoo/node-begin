"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
  home : (req, res) => {
    logger.info('GET / 200 "move to home"');
    res.render('home/index');
  },
  login : (req, res) => {
    logger.info('GET /login 200 "move to login"');
    res.render('home/login');
  },
  register : (req, res) => {
    logger.info('GET /register 200 "move to register"');
    res.render('home/register');
  }
}

const process = {
  login: async (req, res) => {
    const user  = new User(req.body);
    const response = await user.login();
    logger.info(
      `POST /login 200 Response: "success : ${response.success}, msg: ${response.msg}"`
    );
    return res.json(response);
  },
  register: async (req, res) => {
    const user  = new User(req.body);
    const response = await user.register();
    logger.info(
      `POST /register 200 Response: "success : ${response.success}, msg: ${response.msg}"`
    );
    return res.json(response);
  },
};

module.exports = {
  output,
  process
};