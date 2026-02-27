import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const saltRounds = 10;
    const forHash: string = createUserInput.password;
    const hash = await bcrypt.hash(forHash, saltRounds);

    const { email, owner } = createUserInput;
    try {
      const ownerExists = await this.prisma.user
        .findFirst({
          where: {
            owner: true,
          },
        })
        .then((owner) => {
          if (owner) {
            throw new Error('boner exists');
          }
        });
      console.log('exists', ownerExists);
      // const newUser = {
      //   email: email,
      //   owner: owner,
      //   id: 0,
      //   password: hash,
      // };
      // if (ownerExists) throw new Error('owner exists');
      // else {
      const newUser = await this.prisma.user.create({
        data: {
          email,
          owner,
          password: hash,
        },
      });
      // }

      if (createUserInput.owner) {
        console.log('Owner created:', newUser);
      } else {
        console.log('User created:', newUser);
      }

      return newUser;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        error.message = 'Blog already has owner';
        throw error;
      }
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async findCollectionsOfOwner() {
    const collectionsOfOwner = await this.prisma.user.findFirst({
      where: { owner: true },
      include: { collections: true },
    });
    return collectionsOfOwner;
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
