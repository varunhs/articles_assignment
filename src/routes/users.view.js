const router = require("express").Router();
const userController = require("../controlers/userController");

router.get("/", (req, res) => {
  userController.list(req, res);
});

router.get("/new", (req, res) => {
  userController.add(req, res);
});

router.get("/:id", (req, res) => {
  userController.view(req, res);
});

router.get("/:id/edit", (req, res) => {
  userController.edit(req, res);
});

module.exports = router;
