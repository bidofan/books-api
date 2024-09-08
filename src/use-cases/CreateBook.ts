import { Book } from '../domain/entities/Book'
import { BookRepository } from '../domain/interfaces/BookRepository'

export class CreateBook {
  constructor (private bookRepository: BookRepository, private book: Book) {}

  async execute() {
    return await this.bookRepository.create(this.book)
  }
}
