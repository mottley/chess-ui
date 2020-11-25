import { Color } from './enum';

export interface MoveVO {
  move: string,
  username: string,
  color: Color,
  time: Date
  number: number
}