import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PrismaService } from 'src/prisma.service';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostInput: CreatePostInput) {
    const { title, content, ministryId } = createPostInput;
    try {
      const newPost = await this.prisma.post.create({
        data: {
          timestamp: new Date(),
          title,
          content,
          ministryId,
        },
      });
      console.log('post created:', newPost);
      return newPost;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }

  async findAll() {
    const posts = await this.prisma.post.findMany();
    return posts;
  }

  async findAllPostsInMinistry(ministryId: number) {
    const posts = await this.prisma.post.findMany({
      where: { ministryId },
    });
    return posts;
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({
      where: { id: id },
      include: { ministry: true },
    });
    return post;
  }

  async update(id: number, updatePostInput: UpdatePostInput) {
    const update = await this.prisma.post.update({
      where: {
        id: id,
      },
      data: updatePostInput,
    });
    return update;
  }

  async remove(id: number) {
    const deleted = await this.prisma.post.delete({
      where: {
        id: id,
      },
    });
    return deleted;
  }
}
