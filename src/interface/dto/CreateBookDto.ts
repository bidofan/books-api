import { IsString, IsDateString } from 'class-validator'

export class CreateBookDto {
  @IsString()
  title!: string

  @IsString()
  author!: string

  @IsDateString()
  publishedDate!: string
}
