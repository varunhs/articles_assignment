const router = require("express").Router();
const articleController = require("../controlers/articlesController");

router.get("/", (req, res) => {
  articleController.listArticles(req, res);
});

router.get("/:id", (req, res) => {
  articleController.listArticleById(req, res);
});

router.post("/", (req, res) => {
  articleController.createArticle(req, res);
});

router.put("/:id", (req, res) => {
  articleController.updateArticle(req, res);
});

router.patch("/:id", (req, res) => {
  articleController.patchArticle(req, res);
});

router.delete("/:id", (req, res) => {
  articleController.removeArticle(req, res);
});

module.exports = router;
