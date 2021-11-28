import { Process } from "src/app/modules/process-managment/interfaces/process.interface";

export interface ProcessMapOptions{
  strategic:{
    data: Process[],
    component?: {
      subLvlLimit?: number ,
      selectedProcessById?: number
    }
  },
  missionary:{
    data: Process[],
    component?: {
      subLvlLimit?: number,
      selectedProcessById?: number
    }
  },
  support:{
    data: Process[],
    component?: {
      subLvlLimit?: number,
      selectedProcessById?: number
    }
  }
}
