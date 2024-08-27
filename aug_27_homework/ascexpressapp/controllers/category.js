// const Category = require('../models/category');

// // Create a new category
// exports.createCategory = async (req, res) => {
//     try {
//         const { name, description } = req.body;

//         // Create a new category instance
//         const newCategory = new Category({
//             name,
//             description
//         });

//         // Save the category to the database
//         const savedCategory = await newCategory.save();
//         res.status(201).json(savedCategory);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // Get all categories
// exports.getCategories = async (req, res) => {
//     try {
//         const categories = await Category.find();
//         res.status(200).json(categories);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Get a single category by ID
// exports.getCategoryById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const category = await Category.findById(id);

//         if (!category) {
//             return res.status(404).json({ message: 'Category not found' });
//         }

//         res.status(200).json(category);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Update a category by ID
// exports.updateCategory = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { name, description } = req.body;

//         // Find the category and update it
//         const updatedCategory = await Category.findByIdAndUpdate(
//             id,
//             { name, description },
//             { new: true, runValidators: true }
//         );

//         if (!updatedCategory) {
//             return res.status(404).json({ message: 'Category not found' });
//         }

//         res.status(200).json(updatedCategory);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // Delete a category by ID
// exports.deleteCategory = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedCategory = await Category.findByIdAndDelete(id);

//         if (!deletedCategory) {
//             return res.status(404).json({ message: 'Category not found' });
//         }

//         res.status(200).json({ message: 'Category deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


const Category = require('../models/category');

exports.createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newCategory = new Category({ name, description });
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { name, description },
            { new: true, runValidators: true }
        );
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

