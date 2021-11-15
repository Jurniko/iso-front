import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NebularModule } from 'src/nebular.module';
import { CommonModule } from '@angular/common';
import { ProcessMapComponent } from './components/process-map/process-map.component';
import { NgxBpmnModelerModule } from 'ngx-bpmn-modeler';
import { FormsModule } from '@angular/forms';
import { ProcessComponent } from './components/process/process.component';
@NgModule({
  declarations: [SidebarComponent, ProcessMapComponent, ProcessComponent],
  imports: [
    NebularModule,
    CommonModule,
    NgxBpmnModelerModule,
    FormsModule
  ],
  exports:[SidebarComponent, ProcessMapComponent],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
