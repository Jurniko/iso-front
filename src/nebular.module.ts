import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAccordionModule, NbActionsModule, NbButtonGroupModule, NbButtonModule, NbCalendarModule, NbCardModule, NbContextMenuModule, NbDialogModule, NbDialogService, NbFormFieldModule, NbIconModule,NbInputModule,NbLayoutModule,NbMenuModule,NbMenuService,NbSelectModule,NbSidebarModule,NbSidebarService,NbTabsetModule,NbTagModule,NbTooltipModule,NbTreeGridModule, NbUserModule, NbWindowModule, NbWindowRef, NbWindowService } from '@nebular/theme';
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
    NbWindowModule,
    NbButtonGroupModule,
    NbTooltipModule,
    NbCalendarModule,
    NbDialogModule,
    NbTagModule,
    
  ],
  providers: [
    NbSidebarService,
    NbMenuService,
    NbDialogService,
    NbWindowService
  ],
})
export class NebularModule { }
