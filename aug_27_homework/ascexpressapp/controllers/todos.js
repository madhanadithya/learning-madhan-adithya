const { body, validationResult } = require('express-validator');
const { escape } = require('validator');
const Todo = require('../models/todo');

const sanitizeDescription = (description) => {
    return escape(description);
};

exports.getTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (todo == null) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createTodo = 
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('status').notEmpty().withMessage('Status is required'),
        body('description').optional().customSanitizer(sanitizeDescription)
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const todo = new Todo({
            name: req.body.name,
            status: req.body.status,
            description: req.body.description
        });

        try {
            const newTodo = await todo.save();
            res.status(201).json(newTodo);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };

exports.deleteTodo = async (req, res) => {
    try {
        const result = await Todo.findByIdAndDelete(req.params.id);
        if (result == null) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.putTodo = 
    [
        body('name').optional().notEmpty().withMessage('Name should not be empty'),
        body('status').optional().notEmpty().withMessage('Status should not be empty'),
        body('description').optional().customSanitizer(sanitizeDescription)
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (updatedTodo == null) {
                return res.status(404).json({ message: 'Todo not found' });
            }
            res.json(updatedTodo);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };

