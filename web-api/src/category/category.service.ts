import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {

constructor(
  @InjectModel(Category.name)
  private readonly categoryModel: Model<Category>
) {
}

  async create(createCategoryDto: CreateCategoryDto) {
    const created = await this.categoryModel.create(createCategoryDto);
    return created;
  }

  async findAll() {
    const categories = await  this.categoryModel.find();
    return categories;
  }

  async findOne(id: string) {
    const category = await this.categoryModel.findById(id);
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category: Category | NotFoundException = await this.categoryModel.findById(id);

    try {
      const updatedCategory = await (category as Category).updateOne(updateCategoryDto);
      return {...category,...updatedCategory};
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async remove(id: string) {
    const categoryToRemove: Category | NotFoundException = await this.categoryModel.findById(id);

    try {
      const removedCategory = await (categoryToRemove as Category).deleteOne();
      return this.findAll();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
