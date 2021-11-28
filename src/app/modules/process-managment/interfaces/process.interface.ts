import { Sheet } from "./sheet.interface";

export interface Process{
  id?: number;
  title: string;
  description: string;
  parentId  ?: Process | null;
  hierarchy: 'root'|'process'|'sub-process',
  type: 'strategic'|'missionary'|'support',
  children ?: Process[]
  processMap ? : any;
  flowdiagram ?:string;
  documents? :[],
  sheets?: Sheet[],
  indicators?:[]

}
