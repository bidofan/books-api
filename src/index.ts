import express from 'express'
import { bookRoutes } from './interface/routes/bookRoutes'
import { errorHandler } from './interface/middleware/errorHandler'

const app = express()

app.use(express.json())
app.use('/api', bookRoutes)
app.use(errorHandler)

const PORT = 4000

app.listen(PORT, () => {
  console.log('Server runninng on port' + PORT)
})

