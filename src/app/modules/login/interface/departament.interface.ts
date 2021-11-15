import { User } from "./user.interface";

export interface Departament{
  id: number;

  name: string;

  createdAt: Date;

  updatedAt: Date;

  deletedAt?: Date;

  users: User[];
}
