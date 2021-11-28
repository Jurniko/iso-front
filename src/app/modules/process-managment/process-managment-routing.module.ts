import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { ProcessManagmentComponent } from './process-managment.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [{ path: '', component: ProcessManagmentComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessManagmentRoutingModule {}
