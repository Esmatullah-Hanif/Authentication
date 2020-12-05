const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

exports.run = async (myQuery) => {
  try {
    connection = await oracledb.getConnection({
      user: "lab",
      password: "lab",
      connectString: "localhost/orcl", //"localhost:XE"
    });
    const result = await connection.execute(myQuery);
    console.log(result.rows);
    return result;
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
};

// const result = await connection.execute(
//   `SELECT manager_id, department_id, department_name
//    FROM departments
//    WHERE manager_id = :id`  // bind value for :id
// );
// console.log(result.rows);
