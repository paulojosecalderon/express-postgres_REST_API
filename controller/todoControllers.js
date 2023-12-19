const pool = require('../db');

const postTodo = async(req,res)=>{
    const {description} = req.body;
    try {
        const postThatTodo = await pool.query('INSERT INTO todos(description) VALUES($1) RETURNING *', [description]);     
        console.log('Todo Posted!');
        res.json(postThatTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}

const getTodos = async(req,res)=>{
    try {
        const getAllTodos = await pool.query('SELECT * FROM todos');
        console.log('All todos displayed!');
        res.json(getAllTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
}

const getOneTodo = async(req,res)=>{
    const {id} = req.params;
    try {
        const getThatTodo = await pool.query('SELECT * FROM todos WHERE todo_id = $1', [id]);
        res.json(getThatTodo.rows[0]);
        console.log('Got Todo!')
    } catch (err) {
        console.error(err.message);
    }
}

const deleteTodo = async(req,res)=>{
    const {id} = req.params;
    try {
        const deleteThatTodo = await pool.query('DELETE FROM todos WHERE todo_id = $1 RETURNING *', [id]);
        res.json(deleteThatTodo.rows[0]);
        console.log('Todo Deleted!');
    } catch (err) {
        console.error(err.message)
    }
}

const putTodo = async (req,res)=>{
    const {id} = req.params;
    const{description} = req.body;

    try {
        const updateThatTodo = await pool.query('UPDATE todos SET description = $1 WHERE todo_id = $2 RETURNING *;', [description, id]);
        res.json(updateThatTodo.rows[0]);
        console.log('Todo updated!');
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = {
    postTodo, getTodos, getOneTodo, deleteTodo, putTodo
}