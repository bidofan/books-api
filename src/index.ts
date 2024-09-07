import express from 'express'
import { bookRoutes } from './interface/routes/bookRoutes'

const app = express()

app.use(express.json())
app.use('/api', bookRoutes)

const PORT = 4000

app.listen(PORT, () => {
  console.log('Server runninng on port' + PORT)
})

