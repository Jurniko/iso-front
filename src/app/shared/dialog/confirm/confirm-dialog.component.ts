import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NbDialogRef,
} from '@nebular/theme';

@Component({
  selector: 'app-process-content',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent implements OnInit {
  title!:string;
  description !: string

  constructor(
    public _dialogRef: NbDialogRef<ConfirmDialogComponent>,
    private _formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
  }

}
