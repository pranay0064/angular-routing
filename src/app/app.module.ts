import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{ Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';

const routes: Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {
    path:'settings',
    component:SettingsComponent,
    children:[
      {path:'profile',component:SettingsProfileComponent},
      {path:'contact',component:SettingsContactComponent}
    ]

  },
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(routes), FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, SettingsComponent, PageNotFoundComponent, SettingsProfileComponent, SettingsContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
