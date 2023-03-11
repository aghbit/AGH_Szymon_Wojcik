import { Component } from '@angular/core';
import { DataService, ITrip } from '../data.service';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})
export class TripsListComponent {
  trips:ITrip[] = []
  constructor(dataSrv: DataService) {
    dataSrv.dataMethod$.subscribe((res:ITrip[])=> {
      console.log(res)
      this.trips = res;
    })

    dataSrv.getData()
  }
}
