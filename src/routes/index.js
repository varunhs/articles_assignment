const router = require("express").Router();

const userRouter = require("./usersRouter");
const articleRouter = require("./articlesRouter");
const assetsRouter = require("./assetsRouter");
const usersView = require("./users.view");
const articleView = require("./articlesViewRouter");

router.use("/api/users", userRouter);
router.use("/api/articles", articleRouter);
router.use("/api/assets", assetsRouter);

router.use("/usersView", usersView);
router.use("/articlesView", articleView);
router.use("/assets", assetsRouter);

module.exports = router;
