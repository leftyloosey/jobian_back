import { Injectable } from '@nestjs/common';
import { CreateMinistryInput } from './dto/create-ministry.input';
import { UpdateMinistryInput } from './dto/update-ministry.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MinistryService {
  constructor(private prisma: PrismaService) {}

  async create(createMinistryInput: CreateMinistryInput) {
    const { title, heading, authorId } = createMinistryInput;
    try {
      const newMinistry = await this.prisma.ministry.create({
        data: {
          timestamp: new Date(),
          title,
          heading,
          authorId,
        },
      });
      console.log('Created:', newMinistry);
      return newMinistry;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async findAll() {
    const ministries = await this.prisma.ministry.findMany();
    return ministries;
  }
  async findAllMinistriesWithPosts() {
    const ministries = await this.prisma.ministry.findMany({
      include: { posts: true },
    });
    return ministries;
  }

  async findOne(id: number) {
    const ministry = await this.prisma.ministry.findUnique({
      where: { id: id },
      include: { posts: true },
    });
    return ministry;
  }

  async update(id: number, updateMinistryInput: UpdateMinistryInput) {
    const update = await this.prisma.ministry.update({
      where: {
        id: id,
      },
      data: updateMinistryInput,
    });
    return update;
  }

  async remove(id: number) {
    const deleted = await this.prisma.ministry.delete({
      where: {
        id: id,
      },
    });
    return deleted;
  }
}
