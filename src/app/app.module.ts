import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './home/header/header.component';
import { ServesComponent } from './home/serves/serves.component';
import { InfoComponent } from './home/info/info.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ParallaxComponent } from './home/parallax/parallax.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ServesComponent,
    InfoComponent,
    ProjectsComponent,
    ParallaxComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
