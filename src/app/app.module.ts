import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbContextMenuModule, NbDialogModule, NbMenuModule, NbThemeModule, NbUserModule, NbWindowModule} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NebularModule } from 'src/nebular.module';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs,'es')

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NebularModule,
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot()
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],

  bootstrap: [AppComponent]
})
export class AppModule { }
