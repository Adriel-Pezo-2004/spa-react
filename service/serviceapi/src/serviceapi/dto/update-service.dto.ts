import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateServiceDto {
  @IsString()
  @IsOptional()
  code: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  price?: number;
}
