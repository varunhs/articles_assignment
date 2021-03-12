const db = require("../db/index");

const assets = {
  listAssetsInfo: () => {
    return db.query("SELECT * from assets");
  },

  listAssetsInfoById: (id) => {
    return db.query(`SELECT * from assets WHERE id = ${id}`);
  },

  createAssetsInfo: (data) => {
    return db.query(
      `INSERT INTO assets(file_path,file_type,file_name,size,article_id) VALUES($1,$2,$3,$4,$5) returning * `,
      [
        data.file_path,
        data.file_type,
        data.file_name,
        data.size,
        data.article_id,
      ]
    );
  },

  updateAssetsInfo: (assetsId, updateData) => {
    return db.query(
      `UPDATE assets SET file_path=$1,file_type=$2,file_name=$3,size=$4,article_id=$5 WHERE id=${assetsId} returning *`,
      [
        updateData.file_path,
        updateData.file_type,
        updateData.file_name,
        updateData.size,
        updateData.article_id,
      ]
    );
  },

  patchAssetsInfo: (assetsId, updateData) => {
    return db.query(
      `UPDATE assets SET file_path=$1,file_type=$2  WHERE id=${assetsId} returning *`,
      [updateData.file_path, updateData.file_type]
    );
  },

  removeAssetsInfo: (assetsId) => {
    return db.query(`DELETE FROM assets WHERE id=${assetsId}`);
  },
};

module.exports = assets;
