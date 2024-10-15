import { Router } from 'express'
import { BookController } from '../controllers/BookController'

const router = Router()

const bookController = new BookController()

router.get('/books', (req, res) => bookController.getAll(req, res))
router.post('/books', (req, res) => bookController.create(req, res))
router.patch('/books/:id', (req, res) => bookController.update(req, res))

export { router as bookRoutes }

