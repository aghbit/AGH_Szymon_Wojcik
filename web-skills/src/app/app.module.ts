import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MapViewComponent } from './map-view/map-view.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TripsListComponent } from './trips-list/trips-list.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

// material stuff
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MapViewComponent,
    AddTripComponent,
    TripsListComponent,
    TripDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
// angular material
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
// firebase
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
