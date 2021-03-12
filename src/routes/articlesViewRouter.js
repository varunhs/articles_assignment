const router = require("express").Router();
const articleController = require("../controlers/articlesController");

router.get("/", (req, res) => {
  articleController.list(req, res);
});

router.get("/new", (req, res) => {
  articleController.add(req, res);
});

router.get("/:id", (req, res) => {
  articleController.view(req, res);
});

router.get("/:id/edit", (req, res) => {
  articleController.edit(req, res);
});

module.exports = router;
