import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFuqarolarDto } from './dto/create-fuqarolar.dto';
import { UpdateFuqarolarDto } from './dto/update-fuqarolar.dto';
import { Fuqaro } from './schemas/fuqaro.schema';

@Injectable()
export class FuqarolarService {
  constructor(@InjectModel(Fuqaro.name) private fuqaroModel: Model<Fuqaro>) {}

  create(createFuqarolarDto: CreateFuqarolarDto) {
    return this.fuqaroModel.create(createFuqarolarDto);
  }

  findAll() {
    return this.fuqaroModel.find().populate('address');
  }

  findOne(id: string) {
    return this.fuqaroModel.findById({ _id: id });
  }
  findName(username: string) {
    return this.fuqaroModel.findOne({ username });
  }

  update(id: string, updateFuqarolarDto: UpdateFuqarolarDto) {
    return this.fuqaroModel.findByIdAndUpdate(id, updateFuqarolarDto);
  }

  remove(id: string) {
    return this.fuqaroModel.findByIdAndDelete(id);
  }
}
