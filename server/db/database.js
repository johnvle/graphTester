
const { Pool } = require('pg');

const PG_URI =
   'postgres://bhszlgbk:zuzE1pauHpwZIV6iAPydMfKOhb1p8rYx@berry.db.elephantsql.com/bhszlgbk';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});


module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};


