import { Component, Input, OnInit } from '@angular/core';
import { ProcessMap } from '../process-map/interface/process-map.interface';

@Component({
  selector: 'j-process',
  templateUrl: './process.component.html',
})
export class ProcessComponent implements OnInit {
  @Input() color : string = 'blue'
  @Input() title !: string ;
  xmlModel = 'assets/diagram.bpmn';
  processMapTemp !: ProcessMap
  processMap : ProcessMap = {
    title: 'Estatégicos',
    description: 'holis',
    type: 'root',
    children: [
      {
        title: 'Proceso 1',
        description: 'lorem ipson',
        type: 'process',
        children: [
          {
            type: 'sub-process',
            title: 'Sub proceso 1.1',
            description: 'lorem ipson 1.1',
          },
          {
            type: 'sub-process',
            title: 'Sub proceso 1.2',
            description: 'lorem ipson 1.2',
          },
          {
            type: 'sub-process',
            title: 'Sub proceso 1.3',
            description: 'lorem ipson 1.3',
          },
        ],
      },
      {
        title: 'Proceso 2',
        description: 'lorem ipson',
        type: 'process',
        children: [
          {
            type: 'sub-process',
            title: 'Sub proceso 2.1',
            description: 'lorem ipson 2.1',
          },
          {
            type: 'sub-process',
            title: 'Sub proceso 2.2',
            description: 'lorem ipson 2.2',
          },
          {
            type: 'sub-process',
            title: 'Sub proceso 2.3',
            description: 'lorem ipson 2.3',
          },
        ],
      },
      {
        title: 'Proceso 3',
        description: 'lorem ipson',
        type: 'process',
        children: [
          {
            type: 'sub-process',
            title: 'Sub proceso 3.1',
            description: 'lorem ipson 3.1',
          },
          {
            type: 'sub-process',
            title: 'Sub proceso 3.2',
            description: 'lorem ipson 3.2',
          },
          {
            type: 'sub-process',
            title: 'Sub proceso 3.3',
            description: 'lorem ipson 3.3',
          },
        ],
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
    this.processMapTemp = this.processMap
  }

  into(item: ProcessMap) {
    if (item.children) {
      this.processMap = item;
    }
  }
  back(){
    this.processMap = this.processMapTemp
  }
}
