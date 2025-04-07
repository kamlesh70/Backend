import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum ORDER_ENUM {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class PaginationBaseDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1, { message: 'Page must not be less than 1' })
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1, { message: 'resultPerPage must not be less than 1' })
  @Max(25, { message: 'resultPerPage must not be greater than 25' })
  resultPerPage?: number = 10;

  @IsOptional()
  @IsString()
  keyword?: string;

  @IsOptional()
  @IsEnum(ORDER_ENUM, { message: 'Order must be ASC or DESC' })
  order?: ORDER_ENUM = ORDER_ENUM.DESC;

  @IsOptional()
  @IsString()
  orderBy?: string = 'id';
}
