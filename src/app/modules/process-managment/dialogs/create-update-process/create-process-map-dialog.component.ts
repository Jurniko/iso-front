import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NbDialogRef,
  NbMenuItem,
  NbMenuService,
  NbWindowRef,
} from '@nebular/theme';
import { randomString } from 'src/app/utils/randomString.util';
import { Process } from '../../interfaces/process.interface';
import { ProcessManagmentService } from '../../services/process-managment.service';

export interface ProcessTemp extends Process {
  tempId?: string;
  children: ProcessTemp[];
}
@Component({
  selector: 'app-process-content',
  templateUrl: './create-process-map-dialog.component.html',
})
export class CreateProcessMapDialogComponent implements OnInit {
  processMapFormGroup!: FormGroup;
  strategic: ProcessTemp = {
    title: '',
    description: '',
    hierarchy: 'root',
    type: 'strategic',
    children: [] as any,
  };
  missionary: ProcessTemp = {
    title: '',
    description: '',
    hierarchy: 'root',
    type: 'strategic',
    children: [] as any,
  };
  support: ProcessTemp = {
    title: '',
    description: '',
    hierarchy: 'root',
    type: 'strategic',
    children: [] as any,
  };

  constructor(
    public _dialogRef: NbDialogRef<CreateProcessMapDialogComponent>,
    private _formBuilder: FormBuilder,
    private processManagmentService: ProcessManagmentService
  ) {}

  ngOnInit(): void {
    this.processMapFormBuilder();
  }

  processMapFormBuilder() {
    this.processMapFormGroup = this._formBuilder.group({
      code: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      type: [],
      parent: [],
    });
    this.processMapFormGroup.valueChanges.subscribe((e) => {
      console.log(e);
    });
  }

  addProcess(type: 'strategic' | 'missionary' | 'support') {
    let tempId = randomString(10);
    switch (type) {
      case 'strategic':
        this.strategic?.children?.push({
          tempId,
          title: '',
          description: '',
          hierarchy: 'process',
          type: type,
          children: [] as any,
        });
        break;
      case 'missionary':
        this.missionary?.children?.push({
          tempId,
          title: '',
          description: '',
          hierarchy: 'process',
          type: type,
          children: [] as any,
        });
        break;
      case 'support':
        this.support?.children?.push({
          tempId,
          title: '',
          description: '',
          hierarchy: 'process',
          type: type,
          children: [] as any,
        });
        break;
    }
  }

  setProcessValue(
    type: 'strategic' | 'missionary' | 'support',
    tempId: string,
    property: string,
    target: any
  ) {
    switch (type) {
      case 'strategic':
        this.strategic.children = this.strategic.children?.map((e: any) => {
          if (e.tempId == tempId) {
            e[property] = target.value;
          }
          return e;
        });
        break;
      case 'missionary':
        this.missionary.children = this.missionary.children?.map((e: any) => {
          if (e.tempId == tempId) {
            e[property] = target.value;
          }
          return e;
        });
        break;
      case 'support':
        this.support.children = this.support.children?.map((e: any) => {
          if (e.tempId == tempId) {
            e[property] = target.value;
          }
          return e;
        });
        break;
    }
  }

  addSubProcess(type: 'strategic' | 'missionary' | 'support', tempId: string) {
    let newTempId = randomString(10);
    switch (type) {
      case 'strategic':
        this.strategic.children = this.strategic?.children?.map((e) => {
          if (e.tempId == tempId) {
            e.children?.push({
              tempId: newTempId,
              title: '',
              description: '',
              hierarchy: 'sub-process',
              type: type,
              children: [] as any,
            });
          }
          return e;
        });
        break;
      case 'missionary':
        this.missionary.children = this.missionary?.children?.map((e) => {
          if (e.tempId == tempId) {
            e.children?.push({
              tempId: newTempId,
              title: '',
              description: '',
              hierarchy: 'sub-process',
              type: type,
              children: [] as any,
            });
          }
          return e;
        });
        break;
      case 'support':
        this.support.children = this.support?.children?.map((e) => {
          if (e.tempId == tempId) {
            e.children?.push({
              tempId: newTempId,
              title: '',
              description: '',
              hierarchy: 'sub-process',
              type: type,
              children: [] as any,
            });
          }
          return e;
        });
        break;
    }
  }

  setSubProcessValue(
    type: 'strategic' | 'missionary' | 'support',
    tempParentId: string,
    tempId: string,
    property: string,
    target: any
  ) {
    switch (type) {
      case 'strategic':
        this.strategic.children?.map((e) => {
          if (e.tempId == tempParentId) {
            e.children = e.children?.map((e: any) => {
              if (e.tempId == tempId) {
                e[property] = target.value;
              }
              return e;
            });
          }
          return e;
        });
        break;
      case 'missionary':
        this.missionary.children?.map((e) => {
          if (e.tempId == tempParentId) {
            e.children = e.children?.map((e: any) => {
              if (e.tempId == tempId) {
                e[property] = target.value;
              }
              return e;
            });
          }
          return e;
        });
        break;
      case 'support':
        this.support.children?.map((e) => {
          if (e.tempId == tempParentId) {
            e.children = e.children?.map((e: any) => {
              if (e.tempId == tempId) {
                e[property] = target.value;
              }
              return e;
            });
          }
          return e;
        });
        break;
    }
  }

  save() {
    this.processManagmentService.createProcessMap({processMap: [...this.strategic.children, ...this.missionary.children, ...this.support.children] }).subscribe(e=>{this._dialogRef.close()})
  }
}
