import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// @ts-ignore
import BpmnModeler from 'bpmn-js/lib/Modeler.js';

@Component({
  selector: 'j-bpmn',
  templateUrl: './bpmn.component.html',
  styleUrls: ['./bpmn.component.scss'],
})
export class BpmnComponent implements OnInit , AfterViewInit{
  @Input()xml !: string | null ;
  initXml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd" id="sample-diagram"
                  targetNamespace="http://bpmn.io/schema/bpmn">
 <bpmn2:process id="Process_1" isExecutable="false">
   <bpmn2:startEvent id="StartEvent_1"/>
 </bpmn2:process>
 <bpmndi:BPMNDiagram id="BPMNDiagram_1">
   <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">

   </bpmndi:BPMNPlane>
 </bpmndi:BPMNDiagram>
</bpmn2:definitions>`;
  public saveHref: any;

  public saveName = '';
  bpmnModeler!: any;
  @Output() saveXML = new EventEmitter<string>()

  constructor(private http:HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {

    this.bpmnModeler = new BpmnModeler({
      container: '#canvas',
      width: '100%',
      height: '600px',
      propertiesPanel: {
        parent: '#properties'
      }
    })

  }

  ngAfterViewInit(): void {
      this.bpmnModeler.importXML( this.xml ?? this.initXml,(value:any) =>console.log("a"))
  }

  saveDiagram(){
   let a = this.bpmnModeler.saveXML({format:true},(err:any,xml:any)=>{
     this.saveXML.emit(xml)
   })

  }
  //https://programmerclick.com/article/520222574/
  // PANEL : https://programmerclick.com/article/520222574/
  // COMPLETE : https://github.com/yimiaoxiehou/bpmn-js-example-angular/blob/main/src/app/diagram/diagram.component.ts
  setEncoded(data:any, name:any) {
    const encodedData = encodeURIComponent(data);
    if (data) {
      this.saveHref = this.sanitizer.bypassSecurityTrustResourceUrl('data:application/bpmn20-xml;charset=UTF-8,' + encodedData);
      this.saveName = name;
    }
  }
}
