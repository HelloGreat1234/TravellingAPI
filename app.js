require('dotenv').config()

const express = require('express')

const app = express();

const port = 3000;

const notFoundMiddleware = require('./middlewares/notFound')

const UserRouter = require('./routes/User')
const connectDB = require('./db/connect')

app.use(express.json())
app.use('/api/v1/user',UserRouter)
app.use(notFoundMiddleware)


const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log("Connected to the database")
        app.listen(port, () => {
            console.log(`Server listening on ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()