import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SurveyCreatorModule } from 'survey-creator-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { AboutComponent } from './content/about/about.component';
import { ServicesComponent } from './content/services/services.component';
import { ContactComponent } from './content/contact/contact.component';
import { LoginComponent } from './content/auth/login/login.component';
import { RegisterComponent } from './content/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SurveyCreatorComponent } from './content/survey-creator/survey-creator.component';
import { SurveyCreatorWidgetComponent } from './content/survey-creator-widget/survey-creator-widget.component';
import { SurveyListComponent } from './content/survey-list/survey-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    SurveyCreatorComponent,
    SurveyCreatorWidgetComponent,
    SurveyListComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SurveyCreatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
