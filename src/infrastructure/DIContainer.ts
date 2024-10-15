import { Book } from '../domain/entities/Book'
import { MongoBookRepository } from './repositories/MongoBookRepository'
import { GetAllBooks } from '../use-cases/GetAllBooks'
import { CreateBook } from '../use-cases/CreateBook'
import { UpdateBook } from '../use-cases/UpdateBook'
import { DeleteBook } from '../use-cases/DeleteBook'

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

  static updateBookUseCase(book: Book) {
    return new UpdateBook(this.getBookRepository(), book)
  }

  static deleteBookUseCase(id: string) {
    return new DeleteBook(this.getBookRepository(), id)
  }
}

export { DIContainer }
