const mongoose = require('mongoose');

const mainNews = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
    {
        collection: 'main_news'
    }
);

module.exports = mongoose.model('schemaMainNews', mainNews);