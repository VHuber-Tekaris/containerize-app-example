import { Component, OnInit } from '@angular/core';
import { Map } from 'leaflet';
import { take } from 'rxjs';
import { Squirrel } from 'src/app/models/squirrel';
import { SquirrelDataService } from 'src/app/services/squirrel-data.service';

@Component({
  selector: 'app-map-overview',
  templateUrl: './map-overview.component.html',
  styleUrls: ['./map-overview.component.scss']
})
export class MapOverviewComponent implements OnInit {

  private map!: Map;
  squirrels: Squirrel[] = [];

  constructor(private squirrelDataService: SquirrelDataService) {
  }

  ngOnInit(): void {
    this.squirrelDataService.getSquirrelData().pipe(take(1)).subscribe(res => {
      this.squirrels = res.map(sq => new Squirrel(sq));
    });

  }

  receiveMap(map: Map) {
    this.map = map;
  }
}
