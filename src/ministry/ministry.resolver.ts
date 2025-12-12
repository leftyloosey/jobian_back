import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MinistryService } from './ministry.service';
import { CreateMinistryInput } from './dto/create-ministry.input';
import { UpdateMinistryInput } from './dto/update-ministry.input';

@Resolver('Ministry')
export class MinistryResolver {
  constructor(private readonly ministryService: MinistryService) {}

  @Mutation('createMinistry')
  create(
    @Args('createMinistryInput') createMinistryInput: CreateMinistryInput,
  ) {
    return this.ministryService.create(createMinistryInput);
  }

  @Query('ministries')
  findAll() {
    return this.ministryService.findAll();
  }

  @Query('ministriesWithPosts')
  findAllWithPosts() {
    return this.ministryService.findAllMinistriesWithPosts();
  }

  @Query('ministry')
  findOne(@Args('id') id: number) {
    return this.ministryService.findOne(id);
  }

  @Mutation('updateMinistry')
  update(
    @Args('updateMinistryInput') updateMinistryInput: UpdateMinistryInput,
  ) {
    return this.ministryService.update(
      updateMinistryInput.id,
      updateMinistryInput,
    );
  }

  @Mutation('removeMinistry')
  remove(@Args('id') id: number) {
    return this.ministryService.remove(id);
  }
}
