const express = require('express');
const router = express.Router();

//Todo Controllers
const { postTodo, getTodos, getOneTodo, deleteTodo, putTodo } = require('../controller/todoControllers');

router.route('/').post(postTodo).get(getTodos);
router.route('/:id').get(getOneTodo).delete(deleteTodo).put(putTodo);

module.exports = router;