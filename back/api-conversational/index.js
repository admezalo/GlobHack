require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const assistantRouter = require('./routes/assistantRouter');

/* configuration */
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2);

/* mongoose */
//const URI = "mongodb+srv://gglobhack:<password>@cluster0-tzq0g.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to dataBase ' + mongoose.connection.client.s.url);
    })
    .catch(error => console.log(error.message))

    /* middlewares */
app.use(express.json());

/* controllers */
app.use('/api/assistant', assistantRouter);

/* start the server */
app.listen(app.get('port'), () => {
    console.log(`Start the server on port ${app.get('port')}`);
}) ;