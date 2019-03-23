import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './parking-monitor-datasource';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-parking-monitor',
  templateUrl: './parking-monitor.component.html',
  styleUrls: ['./parking-monitor.component.css']
})
export class ParkingMonitorComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  dataSource: DataTableDataSource;

  constructor(public dataService: DataService) { }

  displayedColumns = ['patent', 'location', 'endTime'];

  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.dataService, this.paginator, this.sort);
  }

  deleteParking(event, park) {
    this.dataService.deleteParking(park);
  }

}
