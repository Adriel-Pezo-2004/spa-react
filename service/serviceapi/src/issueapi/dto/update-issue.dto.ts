import { IsNotEmpty, IsString, IsDecimal } from 'class-validator';

export class UpdateIssueDto {
  @IsNotEmpty()
  @IsDecimal()
  pay: number;
}
