require('dotenv').config()

const express = require('express')

const app = express();

const port = 3000;

const notFoundMiddleware = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')

const UserRouter = require('./routes/User')
const AuthRouter = require('./routes/auth')
const ItenaryRouter = require('./routes/Itenary')
const connectDB = require('./db/connect')


app.use(express.json())
app.use('/api/v1',UserRouter)
app.use('/api/v1',AuthRouter)
app.use('/api/v1',ItenaryRouter)

app.use(notFoundMiddleware)
app.use(errorHandler)


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