import { Request, Response } from 'express'
import { DIContainer } from '../../infrastructure/DIContainer'

export class BookController {
  private getAllBooks = DIContainer.getAllBooksUseCase()

  async getAll(req: Request, res: Response) {
    const books = await this.getAllBooks.execute()
    res.json(books)
  }
}
