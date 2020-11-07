const { v4: uuidv4 } = require('uuid');
const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

let usersData = [
  {
    id: '1',
    firstName: 'Bob',
    lastName: 'Cobb',
    email: 'bobcobb@net.com',
    password: 'test',
  },
  {
    id: '2',
    firstName: 'Hal',
    lastName: 'Hope',
    email: 'halhope@net.com',
    password: 'test',
  },
];

const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }

  const { firstName, lastName, email, password } = req.body;

  const hasUser = usersData.find((user) => user.email === email);
  if (hasUser) {
    throw new HttpError('Could not create user, email already exists.', 422);
  }

  const newUser = {
    id: uuidv4(),
    firstName,
    lastName,
    email,
    password,
  };

  usersData.push(newUser);

  res.status(201).json({ user: newUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const matchUser = usersData.find((user) => user.email === email);

  if (!matchUser || matchUser.password !== password) {
    throw new HttpError(
      'Could not identify user, credentials are not correct.',
      401
    );
  }

  res.json({ message: 'Logged in!' });
};

const getUsers = (req, res, next) => {
  const data = usersData;

  if (!usersData) {
    throw new HttpError('Could not find users.', 404);
  }

  res.json({ users: usersData });
};

const getUser = (req, res, next) => {
  const id = req.params.id;

  let user = usersData.find((user) => user.id === id);

  if (!user) {
    return next(new Error('Could not find a user with the provided id,', 404));
  }

  res.json(user);
};

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.signup = signup;
exports.login = login;
