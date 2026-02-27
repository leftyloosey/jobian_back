import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NavHeadingService } from './nav-heading.service';
import { CreateNavHeadingInput } from './dto/create-nav-heading.input';
import { UpdateNavHeadingInput } from './dto/update-nav-heading.input';

@Resolver('NavHeading')
export class NavHeadingResolver {
  constructor(private readonly navHeadingService: NavHeadingService) {}

  @Mutation('createNavHeading')
  create(
    @Args('createNavHeadingInput') createNavHeadingInput: CreateNavHeadingInput,
  ) {
    return this.navHeadingService.create(createNavHeadingInput);
  }

  @Mutation('upsertNavHeading')
  upsert(
    @Args('updateNavHeadingInput') updateNavHeadingInput: UpdateNavHeadingInput,
  ) {
    return this.navHeadingService.upsert(updateNavHeadingInput);
  }

  @Query('navHeadings')
  findAll() {
    return this.navHeadingService.findMany();
  }

  @Query('navHeading')
  findOne(@Args('id') id: number) {
    return this.navHeadingService.findOne(id);
  }

  @Mutation('updateNavHeading')
  update(
    @Args('updateNavHeadingInput') updateNavHeadingInput: UpdateNavHeadingInput,
  ) {
    return this.navHeadingService.update(
      updateNavHeadingInput.id,
      updateNavHeadingInput,
    );
  }

  @Mutation('removeNavHeading')
  remove(@Args('id') id: number) {
    return this.navHeadingService.remove(id);
  }
}
