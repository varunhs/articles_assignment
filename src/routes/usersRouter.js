const router = require("express").Router();
const userController = require("../controlers/userController");

router.get("/", (req, res) => {
  userController.listUsers(req, res);
});

router.get("/:id", (req, res) => {
  userController.listUserById(req, res);
});

router.post("/", (req, res) => {
  userController.createUser(req, res);
});

router.put("/:id", (req, res) => {
  userController.updateUser(req, res);
});

router.patch("/:id", (req, res) => {
  console.log("INSIDE PATCH", req.body);
  userController.patchUser(req, res);
});

router.delete("/:id", (req, res) => {
  userController.removeUser(req, res);
});

router.post("/editRecord/:id", (req, res) => {
  userController.updateUserFromWeb(req, res);
});

module.exports = router;
