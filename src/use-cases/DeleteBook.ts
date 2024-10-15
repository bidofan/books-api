import { BookRepository } from '../domain/interfaces/BookRepository'

export class DeleteBook {
  constructor(private bookRepository: BookRepository, private id: string) {}

  async execute() {
    return await this.bookRepository.delete(this.id)
  }
}
