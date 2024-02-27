import { IsNotEmpty, IsString, IsDecimal } from 'class-validator';

export class CreateIssueDto {
  @IsNotEmpty()
  @IsString()
  issueCode: string;
  @IsNotEmpty()
  @IsString()
  datedCode: string;
  @IsNotEmpty()
  @IsDecimal()
  pay: number;
}

