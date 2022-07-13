import { isNotEmpty, MinLength, IsString } from 'class-validator';

export class CreateCategoryDto {
//   @isNotEmpty()
  @IsString()
  @MinLength(1)
  name: string;
}
