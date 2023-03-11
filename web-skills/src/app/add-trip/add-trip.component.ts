import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService, IImage, ITrip } from '../data.service';


@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent {
  images:IImage[] = []
  newTrip:ITrip = {
    name: '',
    description: '',
    position: {
      lng:0,
      lat:0
    },
    date: undefined,
    thumbnail: 0,
    images:[]
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  location: google.maps.LatLngLiteral = {
    lat: 51,
    lng: 17,
  };

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.location = event.latLng.toJSON();
  }
  constructor(protected dataSrv:DataService ){}

  getImages(event:any){
    this.newTrip.images = []
    for (let i=0; i < event.target.files.length; i++){
      let el = event.target.files[i]
      let file = {
        name:"",
        content:"",
        id:i
      }
      const reader = new FileReader();
      file.name = el.name

      file.content = el
      reader.onload = (e:any) => {
        file.content = e.target.result
        this.newTrip.images.push(file)
      }
      reader.readAsDataURL(el);
    };

  }

  verifyData():boolean{
    let trip : ITrip = this.newTrip
    if (trip.name != "" && trip.description != "" && trip.date.start != "" && trip.date.end != "" && trip.images.length > 0){
      return true
    }
    return false
  }

  addTrip() {
    let obj = {
      start: this.range.getRawValue().start,
      end: this.range.getRawValue().end
    }
    this.newTrip.date = obj
    this.newTrip.position.lat = this.location.lat
    this.newTrip.position.lng = this.location.lng
    if (this.verifyData()) {
      console.log(this.newTrip)
      this.dataSrv.addTrip(this.newTrip)
      window.location.reload()
    }
  }
}
