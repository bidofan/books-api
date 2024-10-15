import { Request, Response } from 'express'
import { validate } from 'class-validator'
import { CreateBookDto } from '../dto/CreateBookDto'
import { DIContainer } from '../../infrastructure/DIContainer'

export class BookController {
  private getAllBooks = DIContainer.getAllBooksUseCase()

  async getAll(req: Request, res: Response) {
    const books = await this.getAllBooks.execute()
    res.json(books)
  }

  async create(req: Request, res: Response) {
    const dto = Object.assign(new CreateBookDto(), req.body)
    const errors = await validate(dto)

    if (errors.length > 0) {
      res.status(422).json({ errors })
    } else {
      const book = await DIContainer.createBookUseCase(req.body).execute()
      res.json(book)
    }
  }

  async update(req: Request, res: Response) {
    req.body.id = req.params.id
    const book = await DIContainer.updateBookUseCase(req.body).execute()
    res.json(book)
  }

  async delete(req: Request, res: Response) {
    const result = await DIContainer.deleteBookUseCase(req.params.id).execute()
    res.json(result).status(204)
  }
}
