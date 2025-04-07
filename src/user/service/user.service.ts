import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'shared-orm-library';
import { Repository } from 'typeorm';
import { UserPaginationDto } from '../dto/users.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getUsers(paginationQuery: UserPaginationDto) {
    try {
      const [data, count] = await this.userRepository.findAndCount({
        select: ['email', 'firstName', 'lastName', 'id'],
        order: {
          [paginationQuery.orderBy]: paginationQuery.order,
        },
        take: paginationQuery.resultPerPage || 10,
        skip:
          (paginationQuery.page - 1 || 0) *
          (paginationQuery.resultPerPage || 10),
      });

      return {
        data,
        total: count,
        page: paginationQuery.page,
        resultPerPage: paginationQuery.resultPerPage,
      };

    } catch (error) {
      throw error;
    }
  }
}
