import { Book } from '../domain/entities/Book'
import { BookRepository } from '../domain/interfaces/BookRepository'

export class UpdateBook {
  constructor (private bookRepository: BookRepository, private book: Book) {}

  async execute() {
    this.book.publishedDate = new Date(this.book.publishedDate)
    return await this.bookRepository.update(this.book)
  }
}
