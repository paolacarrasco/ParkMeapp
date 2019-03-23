import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Parking } from "../models/parking";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  parkingsCollection: AngularFirestoreCollection<Parking>;
  parkingDoc: AngularFirestoreDocument<Parking>;
  parkings: Observable<Parking[]>;

  usersCollection;
  userDoc;

  constructor(public db: AngularFirestore) { 
    // this.parkings = this.db.collection('Parkings_Active').valueChanges();

    this.parkingsCollection = this.db.collection('Parkings_Active');

    this.parkings = this.parkingsCollection.snapshotChanges()
      .pipe( map( actions => {
        return actions.map( a => {
          const data = a.payload.doc.data() as Parking;
          data.id = a.payload.doc.id;
          return data;
        })
      }));
  }

  getParkingsActive() {
    return this.parkings;
  }

  addParking(park: Parking) {
    this.parkingsCollection.add(park);
  }

  deleteParking(park: Parking) {
    this.parkingDoc = this.db.collection("Parkings_Active").doc(park.id);
    this.parkingDoc.delete();
  }
}
