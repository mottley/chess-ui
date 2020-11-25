import { MoveVO } from "../../models/MoveVO";


export interface IMoveSidebarInput {
  moves: MoveVO[]
}

export interface IMoveSidebarEvent { }

export type MoveSidebarProps = IMoveSidebarInput & IMoveSidebarEvent