import { Process } from "./process.interface";

export interface Sheet{
  process: Process;
  code: string;
  name: string;
  edition ? :string;
  objective : string;
  scope ?: string;
  io ?: string;
  stakeholder ?: string
}
