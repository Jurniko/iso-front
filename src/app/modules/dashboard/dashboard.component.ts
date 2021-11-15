import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router) {}

  ngOnInit(): void {
    if(!localStorage.getItem('access_token')){
      this._router.navigate(['/login'])
    }
  }



}
