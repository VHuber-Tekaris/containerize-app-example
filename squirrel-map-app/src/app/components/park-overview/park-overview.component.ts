import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs';
import { Park } from 'src/app/models/park';
import { SquirrelDataService } from 'src/app/services/squirrel-data.service';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-park-overview',
  templateUrl: './park-overview.component.html',
  styleUrls: ['./park-overview.component.scss']
})
export class ParkOverviewComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['AreaName', 'ParkName', 'ParkConditions', 'OtherAnimalSightings', 'Litter', 'TemperatureWeather', 'NrOfSquirrels', 'NrOfSighters'];
  parksDataSource = new MatTableDataSource<Park>();
  parks: Park[] = [];

  constructor(
    private squirrelDataService: SquirrelDataService
  ) { }

  ngOnInit(): void {
    this.squirrelDataService.getParkData().pipe(take(1)).subscribe(res => {
      this.parks = res.map(sq => new Park(sq));
      this.parksDataSource.data = this.parks;
      this.parksDataSource.paginator = this.paginator;
      this.parksDataSource.sort = this.sort;
    });
    
  }

  ngAfterViewInit() {
    this.parksDataSource.paginator = this.paginator;
    this.parksDataSource.sort = this.sort;
  }
}
