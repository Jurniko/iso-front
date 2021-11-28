import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NbDialogRef,
  NbDialogService,
  NbMenuItem,
  NbMenuService,
  NbWindowRef,
} from '@nebular/theme';
import { ConfirmDialogComponent } from 'src/app/shared/dialog/confirm/confirm-dialog.component';
import { Document } from '../../interfaces/document.interface';
import { Indicator } from '../../interfaces/indicator.interface';
import { Process } from '../../interfaces/process.interface';
import { ProcessManagmentService } from '../../services/process-managment.service';
import { menuItems } from './menu-items';

@Component({
  selector: 'app-process-content',
  templateUrl: './process-content-dialog.component.html',
})
export class ProcessContentDialogComponent implements OnInit {
  process!: { type: string; data: Process };
  modeEdit = false;
  itemSelected!: NbMenuItem;
  items: NbMenuItem[] = menuItems;

  sheetFormGroup!: FormGroup;
  documentFormGroup!: FormGroup;
  indicatorFormGroup!: FormGroup;

  generalRowsTable !: any
  generalColumnsTable !: any

  documentIsEditMode  = false;
  documentIsActivateForm= false;
  indicatorIsEditMode  = false;
  indicatorIsActivateForm= false;
  constructor(
    public _dialogRef: NbDialogRef<ProcessContentDialogComponent>,
    private _dialogService: NbDialogService,
    private _menuService: NbMenuService,
    private _formBuilder: FormBuilder,
    private processManagmentService: ProcessManagmentService
  ) {}

  ngOnInit(): void {

    this.itemSelected = this.items[0];
    this.sheetFormBuilder();
    this.refreshProcess();

    this._menuService.onItemClick().subscribe((e) => {
      this.itemSelected = e.item ?? {};
      this.changeTarget();
      this.changeModeEdit(false);
    });
  }

  refreshProcess() {
    this.processManagmentService
      .getProcessById(this.process.data.id ?? -1)
      .subscribe((e) => {
        this.process.data = e;
        this.changeTarget();
        this.changeModeEdit(false);
      });
  }

  changeModeEdit(mode: boolean = false) {
    this.modeEdit = mode;
    switch (this.itemSelected.target) {
      case '#1':
        this.modeEdit
          ? this.sheetFormGroup.enable()
          : this.sheetFormGroup.disable();
        break;
      case '#2':
        break;
      case '#3': // diagrama de flujo
        break;
      case '#4'://documento
        break;
      case '#5'://indicadores
        break;
      case '#6':
        break;
      case '#7':
    }
  }

  changeTarget() {
    switch (this.itemSelected.target) {
      case '#1': //ficha
        this.sheetFormBuilder();
        break;
      case '#2':
        break;
      case '#3': //diagrama de flujo
      this.flowDiagramBuilder();
        break;
      case '#4'://documento
        this.documentFormBuilder();
        break;
      case '#5'://indicadores
      this.indicatorFormBuilder();
        break;
      case '#6':
        break;
      case '#7':
    }
  }

  sheetFormBuilder() {
    this.sheetFormGroup = this._formBuilder.group({
      id: [null],
      processId: [this.process.data.id],
      code: ['', Validators.required],
      name: ['', Validators.required],
      edition: ['', Validators.required],
      objective: [''],
      scope: [''],
      io: [''],
      stakeholder: [''],
    });
    let sheet = (this.process?.data.sheets ?? [{}])[0];

    if (sheet) {
      this.sheetFormGroup.patchValue(sheet);
      this.sheetFormGroup.disable()
    } else {
    }
  }

  flowDiagramBuilder(){}

  documentFormBuilder() {
    this.documentFormGroup = this._formBuilder.group({
      id: [null],
      title: ['', Validators.required],
      url: ['', Validators.required],
      processId:[this.process.data.id]
    });
    this.generalColumnsTable=[
      {prop: 'id', name:'No'},
      {prop: 'title', name:'Nombre'},
      {prop: 'url', name:'Url'},
    ]
    this.generalRowsTable = this.process.data.documents
  }

  documentEdit(document:Document){
    this.documentFormGroup.patchValue(document);
    this.documentIsEditMode = true;
    this.documentIsActivateForm = true;
  }

  documentDelete(document:Document){
    this._dialogService.open(ConfirmDialogComponent,{context:{title:'Eliminar Registro',description:`¿Estás seguro de eliminar el documento <b> No ${document.id}</b>?`}}).onClose.subscribe(e=>{
      if(e) this.processManagmentService.deleteDocument(document).subscribe(e=>{
        this.refreshProcess();
      });
    })
  }

  indicatorFormBuilder(){
    this.indicatorFormGroup = this._formBuilder.group({
      id: [null],
      processId:[this.process.data.id],
      code:['',Validators.required],
      name:['',Validators.required],
    })
    this.generalColumnsTable=[
      {prop: 'id', name:'No'},
      {prop: 'code', name:'Codigo'},
      {prop: 'name', name:'Nombre'},
    ]
    this.generalRowsTable = this.process.data.indicators
  }

  indicatorEdit(indicator:Indicator){
    this.indicatorFormGroup.patchValue(indicator);
    this.indicatorIsEditMode = true;
    this.indicatorIsActivateForm = true;
  }

  indicatorDelete(indicator:Indicator){
    this._dialogService.open(ConfirmDialogComponent,{context:{title:'Eliminar Registro',description:`¿Estás seguro de eliminar el indicador <b> No ${indicator.id}</b>?`}}).onClose.subscribe(e=>{
      if(e) this.processManagmentService.deleteIndicator(indicator).subscribe(e=>{
        this.refreshProcess();
      });
    })
  }

  onSubmit(data?:any) {
    switch (this.itemSelected.target) {
      case '#1': //Ficha
        this.processManagmentService
          .createOrUpdateSheet(this.sheetFormGroup.value)
          .subscribe((e) => {
           this.refreshProcess();
          });
        break;
      case '#2':
        break;
      case '#3': //Diagrama de fluho
        let process = this.process.data;
        process.flowdiagram = data;
        this.processManagmentService
          .createOrUpdateFlowDiagram(process)
          .subscribe((e) => {
          });
        break;
      case '#4': //documentos
        this.processManagmentService
          .createOrUpdateDocument(this.documentFormGroup.value)
          .subscribe((e) => {
            this.indicatorFormBuilder();
            this.refreshProcess();
            this.documentIsEditMode = false;
            this.documentIsActivateForm = false;
          });
        break;
      case '#5': //Indicadores
        this.processManagmentService
          .createOrUpdateIndicator(this.indicatorFormGroup.value)
          .subscribe((e) => {
            this.indicatorFormBuilder();
            this.refreshProcess();
            this.indicatorIsEditMode = false;
            this.indicatorIsActivateForm = false;
          });
        break;
    }
  }
}
