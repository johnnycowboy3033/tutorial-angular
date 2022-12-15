import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { FaqsComponent } from './components/faqs/faqs.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faqs', component: FaqsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    AboutComponent,
    FaqsComponent
  ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        FormsModule,
        FontAwesomeModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
