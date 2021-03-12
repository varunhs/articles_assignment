const router = require("express").Router();
const assetsController = require("../controlers/assetsController");

router.get("/", (req, res) => {
  assetsController.listAssets(req, res);
});

router.get("/:id", (req, res) => {
  assetsController.listAssetsById(req, res);
});

router.post("/", (req, res) => {
  assetsController.createAssets(req, res);
});

router.put("/:id", (req, res) => {
  assetsController.updateAssets(req, res);
});

router.patch("/:id", (req, res) => {
  assetsController.patchAssets(req, res);
});

router.delete("/:id", (req, res) => {
  assetsController.removeAssets(req, res);
});

module.exports = router;