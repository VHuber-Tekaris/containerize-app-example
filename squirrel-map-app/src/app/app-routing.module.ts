import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkOverviewComponent } from './components/park-overview/park-overview.component';
import { MapOverviewComponent } from './components/map-overview/map-overview.component';

const routes: Routes = [
  { path: 'parks', component: ParkOverviewComponent },
  { path: 'map', component: MapOverviewComponent },
  { path: '', redirectTo: '/parks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
