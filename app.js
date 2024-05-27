const express = require('express')

const app = express();

const port = 3000;

const notFoundMiddleware = require('./middlewares/notFound')

const UserRouter = require('./routes/User')

app.use(express.json())
app.use('/api/v1/',UserRouter)
app.use(notFoundMiddleware)


const start = () => {
    try {
        app.listen(port, () => {
            console.log(`Server listening on ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();