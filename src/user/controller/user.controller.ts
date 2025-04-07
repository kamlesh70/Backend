import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserPaginationDto } from '../dto/users.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list')
  getUsers(@Query() paginationQuery: UserPaginationDto) {
    return this.userService.getUsers(paginationQuery);
  }
}
