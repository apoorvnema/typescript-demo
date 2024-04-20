import express, { Request, Response } from 'express';
import { Todo } from '../models/todo'

type RequestBody = { text: string };
type RequestParams = { todoId: string };

let todos: Todo[] = [];

export const getTodos = (req: Request, res: Response) => {
    res.status(200).json({ todos: todos });
};

export const addTodo = (req: Request<{}, {}, RequestBody>, res: Response) => {
    const body = req.body as RequestBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added Todo', todo: newTodo, todos: todos });
};

export const deleteTodo = (req: Request<RequestParams>, res: Response) => {
    const params = req.params as RequestParams;
    todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
    res.status(200).json({ message: 'Deleted todo', todos: todos });
};

export const editTodo = (req: Request<RequestParams, {}, RequestBody>, res: Response) => {
    const params = req.params as RequestParams;
    const tid = params.todoId;
    const body = req.body as RequestBody;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({ message: 'Updated todo', todos: todos });
    }
    res.status(404).json({ message: 'Could not find todo for this id.' });
};