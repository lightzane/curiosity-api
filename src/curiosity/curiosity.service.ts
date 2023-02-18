import { Injectable } from '@nestjs/common';
import { INITIAL_CURIOSITIES } from '../shared/constants';
import { FavoriteDto, WriteDto } from '../shared/dto';
import { Curiosity } from '../shared/models';
import { IDUtil } from '../shared/utils';

@Injectable()
export class CuriosityService {
  curiosities: Curiosity[] = [...INITIAL_CURIOSITIES];

  addCuriosity(dto: WriteDto): Curiosity {
    const curiosity: Curiosity = {
      _id: IDUtil.ObjectId(),
      ...dto,
      favorites: [],
      views: 0,
    };
    this.curiosities.unshift(curiosity);
    return curiosity;
  }

  favorite(dto: FavoriteDto): Curiosity {
    const { curiosityId, user } = dto;

    const curiosity = this.curiosities.find((c) => c._id === curiosityId);

    if (!curiosity) {
      return undefined;
    }

    const existingIdx = curiosity.favorites.findIndex(
      (f) => f._id === user._id,
    );

    if (existingIdx >= 0) {
      curiosity.favorites.splice(existingIdx, 1);
    } else {
      delete user.password;
      curiosity.favorites.push(user);
    }

    return curiosity;
  }

  read(curiosityId: string): Curiosity {
    const curiosity = this.curiosities.find((c) => c._id === curiosityId);

    if (curiosity) {
      curiosity.views++;
    }

    return curiosity;
  }
}
