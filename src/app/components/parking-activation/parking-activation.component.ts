import { Component, OnInit } from '@angular/core';

import { DataService } from "../../services/data.service";
import { Parking } from 'src/app/models/parking';

@Component({
  selector: 'app-parking-activation',
  templateUrl: './parking-activation.component.html',
  styleUrls: ['./parking-activation.component.css']
})
export class ParkingActivationComponent implements OnInit {

  parking = {} as Parking;

  constructor(public dataService: DataService) {  }

  ngOnInit() {
  }

  addParking() {
    
    this.dataService.addParking(this.parking);

    this.parking = {} as Parking;

  }

}
