import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Sale } from './entities/sale.entity';
import { Model } from 'mongoose';

@Injectable()
export class SaleService {
  constructor(@InjectModel(Sale.name) private saleModel: Model<Sale>){}

  async create(sale: CreateSaleDto){
    const existingSale = await this.saleModel.findOne({ saleId: sale.saleId }).exec();
    if (existingSale) {
      console.log('sale detail ',sale.detail);
      existingSale.detail = [...existingSale.detail, ...sale.detail];
      existingSale.total += sale.total;
      return await existingSale.save();
    }
    const createdSale = new this.saleModel(sale);
    return await createdSale.save();
  }

  findAll() {
    return this.saleModel.find().exec();
  }

  findOne(id: string) {
    return this.saleModel.findById(id).exec();
  }

  update(id: string, sale: UpdateSaleDto) {
    return this.saleModel.findByIdAndUpdate(id,sale,{
      new:true
    }).exec();
  }

  remove(id: string) {
    this.saleModel.findByIdAndDelete(id).exec()
    return "Se ha eliminado el registro";
  }
}
