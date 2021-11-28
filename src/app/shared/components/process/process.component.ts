import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Process } from 'src/app/modules/process-managment/interfaces/process.interface';

@Component({
  selector: 'j-process',
  templateUrl: './process.component.html',
})
export class ProcessComponent implements OnInit {
  @Input() color : string = 'blue'
  @Input() title !: string ;
  @Input() subLvlLimit !: number;
  @Input() selectedById !: number | null;
  @Input() processMap !: Process[];
  @Output() onSelected = new EventEmitter<Process>()
  @Input() currentLvlIndex = 1 ;
  processMapTemp !: Process[];

  constructor() { }

  ngOnInit(): void {
    this.subLvlLimit = this.subLvlLimit ?? 1
    this.processMapTemp = this.processMap;
    if(this.selectedById){
      this.selectedProcess();
    }
  }

  selectedProcess(){
   let a = this.processMap?.filter(e=>e.id == this.selectedById);
   if(a) this.processMap = a;
  }

  into(item: Process) {
    if (item.children && this.currentLvlIndex > this.subLvlLimit ) {
      this.currentLvlIndex ++;
      this.processMap = item.children;
    }
  }
  back(){
    this.currentLvlIndex --;
    this.processMap = this.processMapTemp
  }
}
