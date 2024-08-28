const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    path: String,
    filename: String,
});

module.exports = mongoose.model('Video', VideoSchema);
