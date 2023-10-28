const oracledb = require('oracledb');
const DBCONF = require('./connection.js');

async function postLogin (nombre, codigo_identificacion) {
  let connection;
	try {
		connection = await oracledb.getConnection(DBCONF.connection);
    const result = await connection.execute(
      `SELECT * FROM USERDB.PERSONA WHERE nombres = :nombre AND codigo_identificacion = :codigo_identificacion`,
      {
        nombres: nombre,
        codigo_identificacion: codigo_identificacion
      },
      {
        autoCommit: true
      }
    );
    return result.rows;
	} catch (err) {
		console.log('Error: ', err.message);
	} finally {
    if (connection) {
      try {
        await connection.close();
      } catch(err) {
        console.log('Error when closing the database connection: ', err.message);
      }
    }
  }
}

module.exports = {postLogin};

