const db = require("../db/index");

const user = {
  listUsersInfo: (req, res) => {
    return db.query("SELECT * from users WHERE is_deleted=false");
  },

  listUserById: (id) => {
    return db.query(`SELECT * FROM users where id=$1`, [id]);
  },

  createUser: (data) => {
    return db.query(
      `INSERT INTO users(first_name,last_name,email_id,dob,phone,password,gender) VALUES($1,$2,$3,$4,$5,$6,$7) returning * `,
      [
        data.first_name,
        data.last_name,
        data.email_id,
        data.dob,
        data.phone,
        data.password,
        data.gender,
      ]
    );
  },

  updateUser: (userId, updateData) => {
    return db.query(
      `UPDATE users SET first_name=$1,last_name=$2,email_id=$3,dob=$4,phone=$5,password=$6,gender=$7 WHERE id=${userId} returning *`,
      [
        updateData.first_name,
        updateData.last_name,
        updateData.email_id,
        updateData.dob,
        updateData.phone,
        updateData.password,
        updateData.gender,
      ]
    );
  },

  patchUser: (userId, updateData) => {
    const values = [];
    const partialQuery = Object.keys(updateData)
      .map((key, index) => {
        values.push(updateData[key]);
        return `${key}=$${index + 1}`;
      })
      .join(", ");
    return db.query(
      `UPDATE users SET ${partialQuery} WHERE id=${userId} returning *`,
      values
    );
  },

  updateUserFromWeb: (userId, updateData) => {
    const values = [];
    const partialQuery = Object.keys(updateData)
      .map((key, index) => {
        values.push(updateData[key]);
        return `${key}=$${index + 1}`;
      })
      .join(", ");
    return db.query(
      `UPDATE users SET ${partialQuery} WHERE id=${userId} returning *`,
      values
    );
  },

  removeUser: (id) => {
    // return db.query(`DELETE FROM users WHERE id=$1`, [id]);
    return db.query(`UPDATE users SET is_deleted=true WHERE id=$1`, [id]);
  },
};

module.exports = user;
