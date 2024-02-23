import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectModel(Product.name)
    private readonly productoModel: Model<Product>,
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>
  ) {
  }

  async create(createProductDto: CreateProductDto) {
    const category = await this.categoryModel.findById(createProductDto.categoryId);
    const product = {
      ...createProductDto,
      category
    }
    return await this.productoModel.create(product);
  }

  async findAll() {
    return await this.productoModel.find();
  }

  async findOne(id: string) {
    return await this.productoModel.findById(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product: Product | NotFoundException = await this.productoModel.findById(id);

    try {
      const updatedProduct: Product | NotFoundException = await (product as Product).updateOne(updateProductDto);
      return {...product,...updatedProduct};
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async remove(id: string) {
    const productToRemove: Product | NotFoundException = await this.productoModel.findById(id);

    try {
      await (productToRemove as Product).deleteOne();
      return await this.productoModel.find();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
