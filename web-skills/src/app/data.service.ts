import { Injectable } from '@angular/core';
import {
  onValue,
  ref as refDb,
  getDatabase,
  set,
  Database,
  remove,
  update,
} from '@angular/fire/database';
import { deleteObject, getDownloadURL, getStorage, ref as refStorage, uploadString } from '@angular/fire/storage';

import { Observable, Subject } from 'rxjs';


export interface IImage {
  file:string,
  name:string
}
export interface ITrip {
  name:string,
  description:string,
  position:any
  date:any,
  thumbnail:number,
  images:any
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataMethod$: Observable<any>;
  private dataSubject = new Subject<any>();

  data:any
  nextTripId:number = 0

  constructor(private database: Database) {
    this.dataMethod$ = this.dataSubject.asObservable();
    this.getData();
  }

  getData() {
    const db = getDatabase();
    const dbRef = refDb(db);
    return onValue(dbRef, (snapshot) => {
      this.data = snapshot.val().trips;
      console.log(this.data)
      this.nextTripId = this.data.length;
      this.dataSubject.next(this.data);
    });
  }

  addTrip(trip:ITrip) {
    console.log(trip)
    const db = getDatabase()
    const ref = refDb(db, "trips/"+this.nextTripId)
    set(ref, trip)
  }

  // async uploadImage(img:string, name:string, id:number):Promise<string>{
  //   const storage = getStorage()
  //   const storageRef = refStorage(storage, "images/"+id+"/" + name)
  //   return uploadString(storageRef, img, "data_url").then(async (snapshot) => {
  //     console.log("New image added")
  //     const url = await getDownloadURL(snapshot.ref);
  //     console.log("URL: " + url);
  //     return url;
  //   })
  // }
}
