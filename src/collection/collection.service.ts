import { Injectable } from '@nestjs/common';
import { CreateCollectionInput } from './dto/create-collection.input';
import { UpdateCollectionInput } from './dto/update-collection.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CollectionService {
  constructor(private prisma: PrismaService) {}

  async create(createCollectionInput: CreateCollectionInput) {
    const { title, heading, authorId } = createCollectionInput;
    try {
      const newCollection = await this.prisma.collection.create({
        data: {
          timestamp: new Date(),
          title,
          heading,
          authorId,
        },
      });
      console.log('Created:', newCollection);
      return newCollection;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async findAll() {
    const collections = await this.prisma.collection.findMany();
    return collections;
  }
  async findAllCollectionsWithPosts() {
    const collections = await this.prisma.collection.findMany({
      include: { posts: true },
    });
    return collections;
  }
  async findCollectionByUser(authorId: number) {
    const collections = await this.prisma.collection.findMany({
      where: { authorId },
      include: { posts: true },
    });
    return collections;
  }

  async findOneWithPosts(id: number) {
    const collection = await this.prisma.collection.findUnique({
      where: { id: id },
      include: { posts: true },
    });
    return collection;
  }

  async update(id: number, updateCollectionInput: UpdateCollectionInput) {
    const update = await this.prisma.collection.update({
      where: {
        id: id,
      },
      data: updateCollectionInput,
    });
    return update;
  }

  async remove(id: number) {
    const deleted = await this.prisma.collection.delete({
      where: {
        id: id,
      },
    });
    return deleted;
  }
}
