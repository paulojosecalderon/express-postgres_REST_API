--SQL Commands used on the PSQL database to create said database and the tables and their schemas

CREATE DATABASE todo_database;
CREATE TABLE todos (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);