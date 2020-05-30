require('dotenv').config();
const express = require('express');
const app = express();

const assistantRouter = require('./routes/assistantRouter');

/* configuration */
app.set('port', process.env.PORT || 5000);
app.set('json sapces', 2);

/* middlewares */
app.use(express.json());

/* controllers */
app.use('/api/assistant', assistantRouter);

/* start the server */
app.listen(app.get('port'), () => {
    console.log(`Start the server on port ${app.get('port')}`);
}) ;