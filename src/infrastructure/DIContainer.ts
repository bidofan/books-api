import { Book } from '../domain/entities/Book'
import { MongoBookRepository } from './repositories/MongoBookRepository'
import { GetAllBooks } from '../use-cases/GetAllBooks'
import { CreateBook } from '../use-cases/CreateBook'

class DIContainer {
  private static _bookRepository = new MongoBookRepository()

  static getBookRepository() {
    return this._bookRepository
  }

  static getAllBooksUseCase() {
    return new GetAllBooks(this.getBookRepository())
  }

  static createBookUseCase(book: Book) {
    return new CreateBook(this.getBookRepository(), book)
  }
}

export { DIContainer }
