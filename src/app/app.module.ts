import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbContextMenuModule, NbMenuModule, NbThemeModule, NbUserModule} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NebularModule } from 'src/nebular.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
