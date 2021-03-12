const userModel = require("../models/user");
const path = require("path");
const fs = require("fs");
const editInfo = require("../views/users/edit");
const { template } = require("../helpers/template");

let userController = {};

const usersInfo = ["Varun", "Harsha", "Ram"];

userController.listUsers = async (req, res) => {
  try {
    const result = await userModel.listUsersInfo();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

userController.listUserById = async (req, res) => {
  try {
    const result = await userModel.listUserById(req.params.id);
    res.json({ success: true, data: result[0] });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

userController.createUser = async (req, res) => {
  try {
    console.log("REQBODY", req.body);
    const result = await userModel.createUser(req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

userController.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await userModel.updateUser(userId, req.body);
    res.send({ success: true, data: result[0] });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

userController.patchUser = async (req, res) => {
  try {
    console.log("REQUEST INSIDE UPDATE FORM FROM WEB", req.body);
    console.log("REQUEST PARAMS ID", req.params.id);
    const userId = req.params.id;
    const result = await userModel.patchUser(userId, req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

userController.updateUserFromWeb = async (req, res) => {
  try {
    // console.log("REQUEST INSIDE UPDATE FORM FROM WEB", req.body);
    // console.log("REQUEST PARAMS ID", req.params.id);

    const userId = req.params.id;
    const result = await userModel.updateUserFromWeb(userId, req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

userController.removeUser = async (req, res) => {
  try {
    const validateUser = await userModel.listUserById(req.params.id);
    if (validateUser && validateUser.length <= 0) {
      throw new Error("User not found");
    }
    const result = await userModel.removeUser(req.params.id);
    res.status(202).json({ success: true, data: true });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

userController.getUserName = (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

userController.list = async (req, res) => {
  try {
    const result = await userModel.listUsersInfo();
    const bodyStr = result
      .map((user) => {
        return `<tr><td>${user.first_name}</td><td>${user.last_name}</td><td>${user.email_id}</td></tr>`;
      })
      .join("");
    fs.readFile(
      path.join(process.cwd(), "/src/views/users/list.html"),
      "utf-8",
      (err, html) => {
        if (err) res.status(500).json({ error: true, message: err });
        const alteredHtml = html.replace("{{bodyStr}}", bodyStr);
        res.send(alteredHtml);
      }
    );
    // return res.sendFile(path.join(process.cwd(), "/src/views/users/list.html"));
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

// Views
userController.view = async (req, res) => {
  try {
    console.log("INSIDE");
    const result = await userModel.listUserById(req.params.id);
    res.render("users/view", { userData: result[0] });

    // fs.readFile(
    //   path.join(process.cwd(), "/src/views/users/view.html"),
    //   "utf-8",
    //   (err, html) => {
    //     if (err) res.status(500).json({ error: true, message: err });
    //     const alteredHtml = template(result[0], html);
    //     res.send(alteredHtml);
    //   }
    // );
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

userController.add = async (req, res) => {
  try {
    return res.sendFile(path.join(process.cwd(), "/src/views/users/add.html"));
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

userController.edit = async (req, res) => {
  try {
    const result = await userModel.listUserById(req.params.id);
    res.send(editInfo(result[0]));
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

module.exports = userController;
