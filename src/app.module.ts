import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
@Module({
  imports: [PrismaModule, UsersModule, CategoriesModule],
})
export class AppModule {}
