import { Module } from '@nestjs/common';
import { FuqarolarService } from './fuqarolar.service';
import { FuqarolarController } from './fuqarolar.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fuqaro, FuqaroSchema } from './schemas/fuqaro.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Fuqaro.name, schema: FuqaroSchema }]),
  ],
  controllers: [FuqarolarController],
  providers: [FuqarolarService],
  exports: [FuqarolarService],
})
export class FuqarolarModule {}
