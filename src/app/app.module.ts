import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { RouteListComponent } from './route-list/route-list.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      { path: '', component: PlanetListComponent },
      { path: 'routes/:planetId', component: RouteListComponent },
      { path: 'schedules/:routeId', component: ScheduleListComponent }
    ])
    ],
  declarations: [ AppComponent, PlanetListComponent, RouteListComponent, ScheduleListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
