import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingMonitorComponent } from './components/parking-monitor/parking-monitor.component';
import { ParkingActivationComponent } from './components/parking-activation/parking-activation.component';
import { PatentsManagementComponent } from './components/patents-management/patents-management.component';
import { ParkingLocationComponent } from './components/parking-location/parking-location.component';
import { ParkingHomeComponent } from './components/parking-home/parking-home.component';

const routes: Routes = [
  { path: "parking-home", component: ParkingHomeComponent},
  { path: "patents-management", component: PatentsManagementComponent},
  { path: "parking-location", component: ParkingLocationComponent},
  { path: "parking-monitor", component: ParkingMonitorComponent},
  { path: "parking-activation", component: ParkingActivationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ParkingActivationComponent, 
  ParkingMonitorComponent,
  PatentsManagementComponent,
  ParkingLocationComponent,
  ParkingHomeComponent
]
