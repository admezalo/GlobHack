const express = require('express');
const router = express.Router();

const { botIris } = require('./utilites/assistantRouterUtilities');
const { getAllMainNews } = require('./utilites/assistantRouterUtilities');
const { getAllMainNewsIris } = require('./utilites/assistantRouterUtilities');


/* API methos for conversation */
router.post('/conversation', (request, response) => {
    botIris(request.body.input)
        .then(res => JSON.parse(res))
        .then(res => {
            if(res.intents[0].intent === "Noticias_Principales"){
                getAllMainNewsIris(res)
                    .then(res => {
                        response.status(200).json({
                            section: res.intents[0].intent,
                            output: res.output.text[0],
                            news: res.entities,
                        });
                    })
                    .catch(res => response.status(500).json(res))
            }
            else {
                response.status(200).json({
                    section: res.intents[0].intent,
                    output: res.output.text[0],
                });
            }
        })
        .catch(res => response.status(500).json(res))
});

/* API fot get all news of main section */
router.get('/main/news', (request, response) => {
    getAllMainNews()
        .then(res => response.status(200).json(res))
        .catch(res => response.status(500).json(res))
})

module.exports = router;