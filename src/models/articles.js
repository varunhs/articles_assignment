const db = require("../db/index");

const articles = {
  listArticlesInfo: (req, res) => {
    return db.query("SELECT * from articles");
  },

  listArticleInfoById: (id) => {
    return db.query(`SELECT * from articles WHERE id = ${id}`);
  },

  createArticleInfo: (data) => {
    return db.query(
      `INSERT INTO articles(author_id,title,slug,description,content,language,tags) VALUES($1,$2,$3,$4,$5,$6,$7) returning * `,
      [
        data.author_id,
        data.title,
        data.slug,
        data.description,
        data.content,
        data.language,
        data.tags,
      ]
    );
  },

  updateArticleInfo: (articleId, updateData) => {
    return db.query(
      `UPDATE articles SET author_id=$1,title=$2,slug=$3,description=$4,content=$5,language=$6,tags=$7 WHERE id=${articleId} returning *`,
      [
        updateData.author_id,
        updateData.title,
        updateData.slug,
        updateData.description,
        updateData.content,
        updateData.language,
        updateData.tags,
      ]
    );
  },

  patchArticleInfo: (articleId, updateData) => {
    const values = [];
    const partialQuery = Object.keys(updateData)
      .map((key, index) => {
        values.push(updateData[key]);
        return `${key}=$${index + 1}`;
      })
      .join(", ");
    return db.query(
      `UPDATE articles SET ${partialQuery} WHERE id=${articleId} returning *`,
      values
    );
  },

  removeArticleInfo: (articleId) => {
    return db.query(`DELETE FROM articles WHERE id=${articleId}`);
  },
};

module.exports = articles;
