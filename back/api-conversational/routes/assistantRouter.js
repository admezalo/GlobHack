const express = require('express');
const router = express.Router();

/* test of get method for API servcie */
router.get('/main', (request, response) => {
    response.status(200).json({
        estado: "ok",
    })
});

module.exports = router;