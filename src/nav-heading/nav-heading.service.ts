import { Injectable } from '@nestjs/common';
import { CreateNavHeadingInput } from './dto/create-nav-heading.input';
import { UpdateNavHeadingInput } from './dto/update-nav-heading.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class NavHeadingService {
  constructor(private prisma: PrismaService) {}

  async create(createNavHeadingInput: CreateNavHeadingInput) {
    const { blogTitle, authorId } = createNavHeadingInput;
    try {
      const newNavHeading = await this.prisma.navHeading.create({
        data: {
          blogTitle,
          authorId,
        },
      });

      console.log('navMember created:', newNavHeading);
      return newNavHeading;
    } catch (error) {
      console.error('Error creating navMember:', error);
      throw error;
    }
  }

  async upsert(updateNavHeadingInput: UpdateNavHeadingInput) {
    const { id, blogTitle, authorId } = updateNavHeadingInput;
    console.log(id, blogTitle, authorId);
    try {
      const newNavHeading = await this.prisma.navHeading.upsert({
        where: {
          id: id,
        },
        update: {
          blogTitle,
        },
        create: {
          blogTitle,
          authorId,
        },
      });
      console.log('Upserted:', newNavHeading);
      return newNavHeading;
    } catch (error) {
      console.error('Upserting Error:', error);
      throw error;
    }
  }

  async findMany() {
    const navHeadings = await this.prisma.navHeading.findMany();
    return navHeadings;
  }

  findOne(id: number) {
    return `This action returns a #${id} navHeading`;
  }

  async update(id: number, updateNavHeadingInput: UpdateNavHeadingInput) {
    const update = await this.prisma.navHeading.update({
      where: {
        id: id,
      },
      data: updateNavHeadingInput,
    });
    return update;
  }

  async remove(id: number) {
    const deleted = await this.prisma.navHeading.delete({
      where: {
        id: id,
      },
    });
    return deleted;
  }
}
