import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbDialogModule, NbMenuModule, NbThemeModule, NbWindowModule} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NebularModule } from 'src/nebular.module';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { JwtModule } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
    NbWindowModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:  () => {
          return localStorage.getItem("access_token");
        },
        allowedDomains: [environment.host],
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' }],

  bootstrap: [AppComponent]
})
export class AppModule { }
