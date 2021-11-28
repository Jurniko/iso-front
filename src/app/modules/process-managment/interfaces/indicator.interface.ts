import { Process } from "./process.interface";

export interface Indicator{
  id?: number;

  processId: number;

  code: string;

  name: string;

  createdAt: Date;

  updatedAt: Date;

  deletedAt?: Date;

  process?: Process;
}
