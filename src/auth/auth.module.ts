import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { FuqarolarModule } from 'src/fuqarolar/fuqarolar.module';
import { FuqarolarService } from 'src/fuqarolar/fuqarolar.service';

@Module({
  imports: [
    FuqarolarModule,
    JwtModule.register({
      global: true,
      secret: 'Mahalla',
      signOptions: { expiresIn: '300s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
