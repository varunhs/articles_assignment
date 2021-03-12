const articleModel = require("../models/articles");
const fs = require("fs");
const path = require("path");

let articleController = {};

articleController.listArticles = async (req, res) => {
  try {
    const result = await articleModel.listArticlesInfo();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

articleController.listArticleById = async (req, res) => {
  try {
    const articleId = req.params.id;
    const result = await articleModel.listArticleInfoById(articleId);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

articleController.createArticle = async (req, res) => {
  try {
    const result = await articleModel.createArticleInfo(req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

articleController.updateArticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    const result = await articleModel.updateArticleInfo(articleId, req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

articleController.patchArticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    const result = await articleModel.patchArticleInfo(articleId, req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

articleController.removeArticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    const validateUser = await articleModel.listArticleInfoById(req.params.id);
    if (validateUser && validateUser.length <= 0) {
      throw new Error("Article not found");
    }
    const result = await articleModel.removeArticleInfo(articleId);
    res.send({ success: true, data: true });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

// ---------------Views Section-------------------
articleController.list = async (req, res) => {
  try {
    const result = await articleModel.listArticlesInfo();
    res.render("articles/listArticles", {
      articleData: result,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

// Views
articleController.view = async (req, res) => {
  try {
    const result = await articleModel.listArticleInfoById(req.params.id);
    res.render("articles/viewArticle", {
      articleData: result[0],
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

articleController.add = async (req, res) => {
  try {
    res.render("articles/addArticle");
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

articleController.edit = async (req, res) => {
  try {
    const result = await articleModel.listArticleInfoById(req.params.id);
    if (!result) {
      throw new Error("Article not found");
    }
    res.render("articles/editArticle", {
      articleData: result[0],
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

module.exports = articleController;
