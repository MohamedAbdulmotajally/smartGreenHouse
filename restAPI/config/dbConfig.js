const { createPool} = require("mysql");
const pool = createPool({
    port:process.env.DB_PORT ,
    host:process.env.DB_HOST ,
    user:process.env.DB_USER ,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    dateStrings:["DATETIME","DATE"],
    timezone:'UTC',
    connectionLimit: 10
});
module.exports = pool;
