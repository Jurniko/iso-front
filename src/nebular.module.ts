import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAccordionModule, NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule, NbFormFieldModule, NbIconModule,NbInputModule,NbLayoutModule,NbMenuModule,NbMenuService,NbSelectModule,NbSidebarModule,NbSidebarService,NbTabsetModule,NbTreeGridModule, NbUserModule, NbWindowModule } from '@nebular/theme';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';


@NgModule({
  declarations: [
  ],
  exports: [
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    NbFormFieldModule,
    NbCardModule,
    NbSidebarModule,
    NbSelectModule,
    NbTreeGridModule,
    NbAccordionModule,
    NbIconModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbContextMenuModule,
    NbUserModule,
    NbMenuModule,
    NbTabsetModule,
    NbWindowModule
  ],
  providers: [
    NbSidebarService,
    NbMenuService,
  ],
})
export class NebularModule { }
