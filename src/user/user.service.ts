import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const saltRounds = 10;
    const forHash: string = createUserInput.password;
    const hash = await bcrypt.hash(forHash, saltRounds);

    const { name, email } = createUserInput;
    try {
      const newUser = await this.prisma.user.create({
        data: {
          email,
          name,
          password: hash,
        },
      });
      console.log('User created:', newUser);
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async findAllWithMinistries() {
    const usersWithPosts = await this.prisma.user.findMany({
      include: {
        ministries: true,
      },
    });
    return usersWithPosts;
    // const users = await this.prisma.user.findMany();
    // return users;
  }

  async getUserForAuth(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    let isMatch: boolean = false;

    if (user?.password)
      isMatch = await bcrypt.compare(password, user?.password);
    if (isMatch) return user;
    throw new UnauthorizedException();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
