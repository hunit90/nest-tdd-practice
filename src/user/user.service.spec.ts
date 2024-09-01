import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { CreateUserDto } from "./dto/create-user.dto";

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('should be defined', () => {
    const createUserDto: CreateUserDto = {};
    expect(service.create(createUserDto)).toBe('This action adds a new user');
  });
});
