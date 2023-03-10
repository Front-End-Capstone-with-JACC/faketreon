import { sql } from "./dbController.js"; //import database configs from dbController

const getAllUsers = (req, res, next) => {
  sql`SELECT id, email, name, avatar, created_at, updated_at FROM users`
    .then((users) => {
      res.json(users);
    })
    .catch(next);
};

const getUserById = (req, res, next) => {
  let id = req.params.id;
  sql`SELECT email, name, avatar, created_at, updated_at FROM users WHERE id=${id}`
    .then((user) => {
      if (user.length === 0) {
        res.set("Content-Type", "text/plain");
        res.status(404);
        res.send("Not Found");
      }
      res.json(user[0]);
    })
    .catch(next);
};

const postCreateUser = (req, res, next) => {
  const requiredKeys = ["email", "password", "name"];
  if (requiredKeys.every((key) => req.body.hasOwnProperty(key))) {
    sql`INSERT INTO users (email, password, name) VALUES (${req.body.email},${req.body.password},${req.body.name}) RETURNING *;`
      .then((user) => {
        res.status(201);
        res.json(user[0]);
      })
      .catch(next);
  } else {
    res.status(400).send("Bad Request");
    console.log(req.body);
  }
};

const patchUser = (req, res, next) => {
  const { id } = req.params;
  sql`UPDATE users SET ${sql(req.body)} WHERE id=${id} RETURNING *`
    .then((user) => {
      console.log(user.statement.string);
      res.send(user[0]);
    })
    .catch(next);
};

const deleteUser = (req, res, next) => {
  const { id } = req.params;
  sql` DELETE FROM users WHERE id=${id}`
    .then((user) => {
      console.log(user.statement.string);
      res.send(user[0]);
    })
    .catch(next);
};

export { getAllUsers, getUserById, postCreateUser, patchUser, deleteUser };
