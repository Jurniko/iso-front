export interface ProcessMap{
  title: string;

  description: string;

  parent  ?: ProcessMap;

  type: 'root'|'process'|'sub-process',

  children ?: ProcessMap[]
}
