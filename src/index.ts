import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { bookRoutes } from './interface/routes/bookRoutes'
import { errorHandler } from './interface/middleware/errorHandler'

dotenv.config()
const app = express()
const MONGOURL = process.env.MONGO_URL as string
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use('/api', bookRoutes)
app.use(errorHandler)

mongoose.connect(MONGOURL).then(() => {
  console.log('Successfully connected to mongoDB')
})
.catch((err) => { console.log(err) })

app.listen(PORT, () => {
  console.log('Server runninng on port' + PORT)
})

