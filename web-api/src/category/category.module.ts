import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category, CategorySchema } from './entities/category.entity';
import { MongooseModule } from '@nestjs/mongoose';

const categorySchema = MongooseModule.forFeature([
  {
    name: Category.name,
    schema: CategorySchema
  }
]);

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [
    categorySchema
  ],
  exports: [
    categorySchema
  ]
})
export class CategoryModule {}
