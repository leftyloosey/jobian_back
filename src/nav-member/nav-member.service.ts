import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateNavMemberInput } from './dto/create-nav-member.input';
import { UpdateNavMemberInput } from './dto/update-nav-member.input';

@Injectable()
export class NavMemberService {
  constructor(private prisma: PrismaService) {}

  async create(createNavMemberInput: CreateNavMemberInput) {
    const { title, content, collectionId } = createNavMemberInput;
    try {
      const newNavMember = await this.prisma.navMember.create({
        data: {
          title,
          content,
          collectionId,
        },
      });

      console.log('navMember created:', newNavMember);
      return newNavMember;
    } catch (error) {
      console.error('Error creating navMember:', error);
      throw error;
    }
  }

  async findAll() {
    const navMembers = await this.prisma.navMember.findMany();
    return navMembers;
  }

  async findAllMembersInHeading(collectionId: number) {
    const members = await this.prisma.navMember.findMany({
      where: { collectionId },
    });
    return members;
  }

  async findOne(id: number) {
    const navMember = await this.prisma.navMember.findUnique({
      where: { id: id },
      // include: { collection: true },
    });
    return navMember;
  }

  async update(id: number, updateNavMemberInput: UpdateNavMemberInput) {
    const update = await this.prisma.navMember.update({
      where: {
        id: id,
      },
      data: updateNavMemberInput,
    });
    return update;
  }

  async remove(id: number) {
    const deleted = await this.prisma.navMember.delete({
      where: {
        id: id,
      },
    });
    return deleted;
  }
}
