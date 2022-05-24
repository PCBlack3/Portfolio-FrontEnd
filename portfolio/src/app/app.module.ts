import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardAndSoftComponent } from './components/hard-and-soft/hard-and-soft.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './services/person.service';
import { EducationService } from './services/education.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { AlertService } from './services/alert.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    HardAndSoftComponent,
    ProjectsComponent,
    FooterComponent,
    LogoComponent,
    LoginComponent,
    PortfolioComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule, 
    RouterModule
    
  ],
  providers: [PersonService, EducationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
