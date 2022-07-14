import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}
  create(createPostDto: CreatePostDto) {
    return this.prismaService.post.create({ data: createPostDto });
  }

  findAll() {
    return this.prismaService.post.findMany();
  }

  findOne(id: string) {
    return this.prismaService.post.findUnique({ where: { id } });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prismaService.post.update({
      data: updatePostDto,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prismaService.post.delete({ where: { id } });
  }
}
