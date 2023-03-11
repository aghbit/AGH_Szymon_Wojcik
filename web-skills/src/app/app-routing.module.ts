import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { MapViewComponent } from './map-view/map-view.component';
import { TripsListComponent } from './trips-list/trips-list.component';

const routes: Routes = [
  { path: 'home', component: MapViewComponent },
  { path: 'add', component: AddTripComponent },
  { path: 'list', component: TripsListComponent },
  {path: "**", redirectTo:"home", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
