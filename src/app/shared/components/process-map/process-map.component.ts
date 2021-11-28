import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Process } from 'src/app/modules/process-managment/interfaces/process.interface';
import { ProcessMapOptions } from './interface/process-map.interface';

@Component({
  selector: 'j-process-map',
  templateUrl: './process-map.component.html',
})
export class ProcessMapComponent implements OnInit {
  @Input() options !: ProcessMapOptions;
  @Output() onSelected  = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
    this.strategic.component = this.strategic.component??{subLvlLimit:1}
    this.missionary.component = this.missionary.component??{subLvlLimit:1}
    this.support.component = this.support.component??{subLvlLimit:1}
  }

  processSelected(item:Process,type:'strategic' | 'missionary' | 'support'){
    this.onSelected.emit({type, data:item})
  }

  get strategic(){
    return this.options.strategic;
  }
  get missionary() {
    return this.options.missionary;
  }
  get support(){
    return this.options.support;
  }
}
