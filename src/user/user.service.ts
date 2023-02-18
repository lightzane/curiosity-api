import { Injectable } from '@nestjs/common';
import { INITIAL_USERS } from '../shared/constants';
import { LoginDto } from '../shared/dto';
import { User } from '../shared/models';
import { IDUtil } from '../shared/utils';

@Injectable()
export class UserService {
  users: User[] = [...INITIAL_USERS];

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
}
