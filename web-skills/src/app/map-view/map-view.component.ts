import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { DataService } from '../data.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements OnInit {
  constructor(private dataSrv: DataService) {}
  trips: any;
  ngOnInit(): void {
    this.dataSrv.dataMethod$.subscribe((data: any) => {
      this.trips = data;
      this.loadMarkers();
    });

    this.dataSrv.getData()
  }
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  currDesc:string = "haha"
  display: any;

  center: google.maps.LatLngLiteral = {
    lat: 51,
    lng: 17,
  };
  zoom = 4;
  markersData: any = [];
  // addMarker(event: google.maps.MapMouseEvent) {
  //   if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  // }
  loadMarkers(){
    this.trips.forEach((el:any) => {
      let obj = {
        position: {
          lat:el.position.lat,
          lng:el.position.lng
        },
        options: {
          draggable:false
        },
        description:el.name + ": " + el.description,
      }
      this.markersData.push(obj)
    });
    console.log(this.markersData)
  }
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker, description:string) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
    this.currDesc = description;
}
}
