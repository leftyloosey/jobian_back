import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { CreateAuthInput } from './dto/create-auth.input';
// import { UpdateAuthInput } from './dto/update-auth.input';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private user: UserService,
  ) {}
  // create(createAuthInput: CreateAuthInput) {
  //   return 'This action adds a new auth';
  // }

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.user.getUserForAuth(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { email: user.email, userName: user.name };
    return {
      // access_token: await this.jwtService.signAsync(payload),
      token: await this.jwtService.signAsync(payload),
    };
  }
  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthInput: UpdateAuthInput) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
