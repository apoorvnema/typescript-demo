import { Router } from "express";

import { getTodos, addTodo, editTodo, deleteTodo } from "../controllers/todos";

const router = Router();

router.get('/get', getTodos);
router.post('/add', addTodo);
router.put('/edit/:todoId', editTodo);
router.delete('/delete/:todoId', deleteTodo);

export default router;