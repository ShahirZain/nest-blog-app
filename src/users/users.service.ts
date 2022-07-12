import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private PrismaService: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.PrismaService.user.create({ data: createUserDto });
  }

  findAll() {
    return this.PrismaService.user.findMany();
  }

  findOne(id: string) {
    return this.PrismaService.user.findUnique({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.PrismaService.user.update({
      data: updateUserDto,
      where: { id },
    });
  }

  remove(id: string) {
    return this.PrismaService.user.delete({ where: { id } });
  }
}
