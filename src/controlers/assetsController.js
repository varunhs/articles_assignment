const assetsModel = require("../models/assets");

let assetsController = {};

assetsController.listAssets = async (req, res) => {
  try {
    const result = await assetsModel.listAssetsInfo();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

assetsController.listAssetsById = async (req, res) => {
  try {
    const articleId = req.params.id;
    const result = await assetsModel.listAssetsInfoById(articleId);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

assetsController.createAssets = async (req, res) => {
  try {
    const result = await assetsModel.createAssetsInfo(req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

assetsController.updateAssets = async (req, res) => {
  try {
    const articleId = req.params.id;
    const result = await assetsModel.updateAssetsInfo(articleId, req.body);
    res.send({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

assetsController.patchAssets = async (req, res) => {
  try {
    const articleId = req.params.id;
    const result = await assetsModel.patchAssetsInfo(articleId, req.body);
    console.log("RESULT", result);
    res.send({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

assetsController.removeAssets = async (req, res) => {
  try {
    const articleId = req.params.id;
    const validateUser = await assetsModel.listAssetsInfoById(req.params.id);
    if (validateUser && validateUser.length <= 0) {
      throw new Error("Assets not found");
    }
    const result = await assetsModel.removeAssetsInfo(articleId);
    res.send({ success: true, data: true });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

module.exports = assetsController;
