import { IsIn, IsOptional } from 'class-validator';
import { PaginationBaseDto } from 'src/shared/dto/pagination.dto';

const ALLOWED_ORDER_BY_FIELDS = ['id', 'firstName', 'lastName', 'email'];

export class UserPaginationDto extends PaginationBaseDto {
  @IsOptional()
  @IsIn(ALLOWED_ORDER_BY_FIELDS, {
    message: `orderBy must be one of the following: ${ALLOWED_ORDER_BY_FIELDS.join(', ')}`,
  })
  orderBy?: string = 'id';
}
