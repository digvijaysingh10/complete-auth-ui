const express = require('express');
const userRouter = require('./routers/userRouter');
const cors = require('cors');
const { PORT } = require('./config/config');

const app = express();

app.use(cors(
    {
        origin : ['http://localhost:3000'],
        credentials : true
    }
));

app.use(express.json());
app.use('/user', userRouter);


app.use(express.static('./static/uploads'));

app.get('/', (req, res) => {
    res.status(299).send('Server Running');
})

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/`);
  });