// const express = require('express');
// const { body, validationResult } = require('express-validator');
// const { escape } = require('validator');
// const router = express.Router();
// const Todo = require('../models/todo');

// const sanitizeDescription = (description) => {
//     return escape(description);
// };

// router.get('/', async (req, res) => {
//     try {
//         const todos = await Todo.find();
//         res.json(todos);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// router.get('/:id', async (req, res) => {
//     try {
//         const todo = await Todo.findById(req.params.id);
//         if (todo == null) {
//             return res.status(404).json({ message: 'Todo not found' });
//         }
//         res.json(todo);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// router.post(
//     '/',
//     [
//         body('name').notEmpty().withMessage('Name is required'),
//         body('status').notEmpty().withMessage('Status is required'),
//         body('description').optional().customSanitizer(sanitizeDescription)
//     ],
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         const todo = new Todo({
//             name: req.body.name,
//             status: req.body.status,
//             description: req.body.description
//         });

//         try {
//             const newTodo = await todo.save();
//             res.status(201).json(newTodo);
//         } catch (err) {
//             res.status(400).json({ message: err.message });
//         }
//     }
// );

// router.delete('/:id', async (req, res) => {
//     try {
//         const result = await Todo.findByIdAndDelete(req.params.id);
//         if (result == null) {
//             return res.status(404).json({ message: 'Todo not found' });
//         }
//         res.json({ message: 'Todo deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// router.put(
//     '/:id',
//     [
//         body('name').optional().notEmpty().withMessage('Name should not be empty'),
//         body('status').optional().notEmpty().withMessage('Status should not be empty'),
//         body('description').optional().customSanitizer(sanitizeDescription)
//     ],
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         try {
//             const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
//             if (updatedTodo == null) {
//                 return res.status(404).json({ message: 'Todo not found' });
//             }
//             res.json(updatedTodo);
//         } catch (err) {
//             res.status(400).json({ message: err.message });
//         }
//     }
// );

// module.exports = router;



const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todos');



router.get('/', async (req, res) => TodoController.getTodo);

router.get('/:id', async (req, res) => TodoController.getTodoById);

router.post(
    '/', TodoController.createTodo
);

router.delete('/:id', async (req, res) => TodoController.deleteTodo );

router.put(
    '/:id', TodoController.putTodo
);

module.exports = router;
