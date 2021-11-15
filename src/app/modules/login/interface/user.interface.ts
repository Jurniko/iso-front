import { Departament } from "./departament.interface";
import { Role } from "./role.interface";

export interface User{
  id?: number;

  departmentId?: number;

  roleId?: number;

  name?: string;

  email?: string;

  password?: string;

  photo_url?: string;

  createdAt?: Date;

  updatedAt?: Date;

  deletedAt?: Date;

  role?: Role;

  department?: Departament;
}
