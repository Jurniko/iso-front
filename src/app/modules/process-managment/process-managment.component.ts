import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { ProcessMapOptions } from 'src/app/shared/components/process-map/interface/process-map.interface';
import { CreateProcessMapDialogComponent } from './dialogs/create-update-process/create-process-map-dialog.component';
import { ProcessContentDialogComponent } from './dialogs/process-content/process-content-dialog.component';
import { Process } from './interfaces/process.interface';
import { ProcessManagmentService } from './services/process-managment.service';

@Component({
  selector: 'app-process-managment',
  templateUrl: './process-managment.component.html',
})
export class ProcessManagmentComponent implements OnInit {
  hasProcessMap = false;

  myProcessMapOptions !: ProcessMapOptions
  constructor(private _dialogService: NbDialogService, private processManagmentService:ProcessManagmentService) {}

  ngOnInit(): void {
    this.getProcessMap();

  }

  getProcessMap(){
     this.processManagmentService.getProcess().subscribe((e:any)=>{

      if(e.strategic.length <= 0 || e.missionary.length <= 0 || e.support.length <= 0) this.hasProcessMap = false
      else{this.hasProcessMap = true;
      this.myProcessMapOptions = {
        strategic:{
          data:e.strategic
        },
        missionary:{
          data:e.missionary
        },
        support:{
          data:e.support
        }
      }
    }
    })
  }

  processSelected(item: { type: string; data: Process }) {
    this._dialogService.open(ProcessContentDialogComponent, {
      context: { process: item },
    } as any);
  }

  openCreateProcessMapDialog() {
    this._dialogService.open(CreateProcessMapDialogComponent).onClose.subscribe(e=>this.getProcessMap());
  }
}
