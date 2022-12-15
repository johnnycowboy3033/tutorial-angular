import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { CopywithinComponent } from './components/array/copywithin/copywithin.component';
import { InitializeComponent } from './components/array/initialize/initialize.component';
import { ShowStatesComponent } from './components/array/show-states/show-states.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'array/copywithin', component: CopywithinComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    AboutComponent,
    FaqsComponent,
    CopywithinComponent,
    InitializeComponent,
    ShowStatesComponent
  ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
