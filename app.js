const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernjwt', {
    useNewURLParser: true,
    useUnifiedTopology: true,
    createIndexes: true,
})
.then(() => console.log('connected to db....'))
.catch((err) => console.log(err));

const userRouter = require('./routes/User');
app.use('/user',userRouter);

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});