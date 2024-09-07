import { Request, Response } from 'express'
import { GetAllBooks } from '../../use-cases/GetAllBooks'
import { CreateBook } from '../../use-cases/CreateBook'

export class BookController {
  constructor(private getAllBooks: GetAllBooks) {}

  async getAll(req: Request, res: Response) {
    const books = await this.getAllBooks.execute()
    res.json(books)
  }
}
