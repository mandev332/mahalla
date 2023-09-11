import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FuqarolarModule } from './fuqarolar/fuqarolar.module';
import { AuthModule } from './auth/auth.module';
import { AddressModule } from './address/address.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TestingModule } from '@nestjs/testing';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(process.cwd(), 'uploads') }),
    MongooseModule.forRoot(
      // 'mongodb://127.0.0.1:27017/lesson',
      'mongodb+srv://nodir:mongodb@cluster0.rlpgj0d.mongodb.net/mahalla',
    ),
    AuthModule,
    FuqarolarModule,
    AddressModule,
    TestingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
