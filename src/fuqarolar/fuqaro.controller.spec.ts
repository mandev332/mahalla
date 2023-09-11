import { Test, TestingModule } from '@nestjs/testing';
import { CreateFuqarolarDto } from './dto/create-fuqarolar.dto';
import { FuqarolarController } from './fuqarolar.controller';
import { FuqarolarService } from './fuqarolar.service';

describe('AppController', () => {
  let appController: FuqarolarController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FuqarolarController],
      providers: [FuqarolarService],
    }).compile();

    appController = app.get<FuqarolarController>(FuqarolarController);
  });

  describe('root', () => {
    it('should return fuqarolar', () => {
      expect(appController.findAll()).toBe([CreateFuqarolarDto]);
    });
  });
});
