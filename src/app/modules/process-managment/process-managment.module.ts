import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessManagmentRoutingModule } from './process-managment-routing.module';
import { ProcessManagmentComponent } from './process-managment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProcessContentDialogComponent } from './dialogs/process-content/process-content-dialog.component';
import { NebularModule } from 'src/nebular.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProcessMapDialogComponent } from './dialogs/create-update-process/create-process-map-dialog.component';
import { ProcessManagmentService } from './services/process-managment.service';

@NgModule({
  declarations: [
    ProcessManagmentComponent,
    ProcessContentDialogComponent,
    CreateProcessMapDialogComponent
  ],
  imports: [
    CommonModule,
    ProcessManagmentRoutingModule,
    SharedModule,
    NebularModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[ProcessManagmentService]
})
export class ProcessManagmentModule { }
