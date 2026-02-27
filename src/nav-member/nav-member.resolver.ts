import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NavMemberService } from './nav-member.service';
import { CreateNavMemberInput } from './dto/create-nav-member.input';
import { UpdateNavMemberInput } from './dto/update-nav-member.input';

@Resolver('NavMember')
export class NavMemberResolver {
  constructor(private readonly navMemberService: NavMemberService) {}

  @Mutation('createNavMember')
  create(
    @Args('createNavMemberInput') createNavMemberInput: CreateNavMemberInput,
  ) {
    return this.navMemberService.create(createNavMemberInput);
  }

  @Query('navMembers')
  findAll() {
    return this.navMemberService.findAll();
  }

  @Query('navMembersInHeading')
  findAllMembersInHeading(@Args('id') navHeadingId: number) {
    return this.navMemberService.findAllMembersInHeading(navHeadingId);
  }

  @Query('navMember')
  findOne(@Args('id') id: number) {
    return this.navMemberService.findOne(id);
  }

  @Mutation('updateNavMember')
  update(
    @Args('updateNavMemberInput') updateNavMemberInput: UpdateNavMemberInput,
  ) {
    return this.navMemberService.update(
      updateNavMemberInput.id,
      updateNavMemberInput,
    );
  }

  @Mutation('removeNavMember')
  remove(@Args('id') id: number) {
    return this.navMemberService.remove(id);
  }
}
