import { Test, TestingModule } from '@nestjs/testing';
import { SockController } from './sock.controller';

describe('SockController', () => {
  let controller: SockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SockController],
    }).compile();

    controller = module.get<SockController>(SockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
