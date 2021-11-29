import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NebularModule } from 'src/nebular.module';
import { CommonModule } from '@angular/common';
import { ProcessMapComponent } from './components/process-map/process-map.component';
import { FormsModule } from '@angular/forms';
import { ProcessComponent } from './components/process/process.component';
import { BpmnComponent } from './components/bpmn/bpmn.component';
import { AppModulesComponent } from './components/app-modules/app-modules.component';
import { RouterModule } from '@angular/router';
import {
  RichTextEditorModule,
  RichTextEditorAllModule,
} from '@syncfusion/ej2-angular-richtexteditor';
import { JRichTextEditorComponent } from './components/rich-text-editor/rich-text-editor.component';
import { LabelDirective } from './directives/style/label.directive';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ConfirmDialogComponent } from './dialog/confirm/confirm-dialog.component';
@NgModule({
  declarations: [
    SidebarComponent,
    ProcessMapComponent,
    ProcessComponent,
    BpmnComponent,
    AppModulesComponent,
    JRichTextEditorComponent,
    LabelDirective,
    ConfirmDialogComponent
  ],
  imports: [
    NebularModule,
    CommonModule,
    FormsModule,
    RouterModule,
    RichTextEditorModule,
    RichTextEditorAllModule,
  ],
  exports: [
    SidebarComponent,
    ProcessMapComponent,
    BpmnComponent,
    AppModulesComponent,
    RichTextEditorModule,
    RichTextEditorAllModule,
    JRichTextEditorComponent,
    LabelDirective,
    ProcessComponent,
    NgxDatatableModule,
    ConfirmDialogComponent
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
