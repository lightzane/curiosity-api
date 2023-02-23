import { Injectable } from '@nestjs/common';
import { CuriosityService } from '../curiosity/curiosity.service';
import { INITIAL_USERS } from '../shared/constants';
import { LoginDto } from '../shared/dto';
import { Curiosity, User } from '../shared/models';
import { IDUtil } from '../shared/utils';

@Injectable()
export class UserService {
  users: User[] = [...INITIAL_USERS];

  constructor(private readonly curiosityService: CuriosityService) {}

  /**
   * Verify if the user is registered
   * @returns `User`
   */
  verifyLogin(input: LoginDto): User {
    const { username, password } = input;

    const user = this.users.find(
      (u) =>
        u.username.toLowerCase() === username.toLowerCase() &&
        u.password === password,
    );

    return user;
  }

  register(input: LoginDto): boolean {
    const user = this.users.find(
      (u) => u.username.toLowerCase() === input.username.toLowerCase(),
    );

    if (user) {
      return false; // User already exists
    }

    const newUser: User = {
      _id: IDUtil.ObjectId(),
      ...input,
    };
    this.users.push(newUser);

    return true;
  }

  myFavorites(userId: User['_id']): Curiosity[] {
    return this.curiosityService.curiosities.filter((curiosity) =>
      curiosity.favorites.some((fav) => fav._id === userId),
    );
  }
}
