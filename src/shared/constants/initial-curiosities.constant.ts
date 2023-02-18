import { Curiosity, User } from '../models';
import { IDUtil } from '../utils';

const qa = [
  {
    question: 'Why does 10+10 is equal to 11+11?',
    answer: 'Because 10+10 is Twenty (20) and 11+11 is Twenty too (22)',
  },
  {
    question:
      'Imagine you’re in a room that’s filling up with water quickly. There are no windows or doors. How do you get out?',
    answer: 'Stop imagining',
  },
  {
    question: 'How many months have 28 days?',
    answer: 'All 12!',
  },
  {
    question:
      'What starts with “e” and ends with “e” but only has one letter in it?',
    answer: 'An envelope',
  },
  {
    question:
      'What occurs once in a minute, twice in a moment, and never in one thousand years?',
    answer: 'The letter M',
  },
];

export const INITIAL_USERS: User[] = [
  {
    _id: IDUtil.ObjectId(),
    username: 'Anonymous',
    password: 'thepasswordthatdonutknows',
  },
];

export const INITIAL_CURIOSITIES: Curiosity[] = new Array(5)
  .fill('')
  .map((v, i) => ({
    _id: IDUtil.ObjectId(),
    ...qa[i],
    createdBy: 'Anonymous',
    createdTs: new Date().toISOString(),
    favorites: [],
    views: Math.floor(Math.random() * 1500 + v),
  }));
