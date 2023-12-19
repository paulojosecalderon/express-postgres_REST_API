const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: 'localhost',
    database: 'todo_database',
    user: 'postgres',
    port: 5432,
    password: process.env.DB_Password
})