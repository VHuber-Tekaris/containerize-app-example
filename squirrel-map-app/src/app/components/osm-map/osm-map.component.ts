
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Map, MapOptions, tileLayer, latLng, Marker, LatLng, Icon } from 'leaflet';
import { Squirrel } from 'src/app/models/squirrel';

@Component({
  selector: 'app-osm-map',
  templateUrl: './osm-map.component.html',
  styleUrls: ['./osm-map.component.scss']
})
export class OsmMapComponent implements OnChanges {

  @Output() map$: EventEmitter<Map> = new EventEmitter;
  @Input() squirrels: Squirrel[] = [];
  @Input() options: MapOptions = {
    layers: [tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      opacity: 0.8,
      maxZoom: 19,
      detectRetina: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })],
    zoom: 11,
    center: latLng(40.730610, -73.935242)
  };
  public map!: Map;
  icon = {
    icon: new Icon({
      iconSize: [25, 41],
      iconAnchor: [13, 0],
      iconUrl: './assets/images/marker-icon.png',
      shadowUrl: './assets/images/marker-shadow.png'
    })
  };

  ngOnChanges(): void {
    this.squirrels.forEach(squirrel => {
      let marker = new Marker(new LatLng(squirrel.Latitude, squirrel.Longitude), this.icon);
      marker.bindPopup(`<b>Squirrel ${squirrel.SquirrelID} (${squirrel.ParkName})</b><br>Fur: ${squirrel.PrimaryFurColor} ${squirrel.HighlightsInFurColor}<br>Activity: ${squirrel.Activities}<br>Location(s): ${squirrel.Location} ${squirrel.SpecificLocation}<br>Interactions with humans: ${squirrel.InteractionsWithHumans}<br>Other notes: ${squirrel.OtherNotes}`);
      marker.addTo(this.map);
    })
  }

  onMapReady(map: Map) {
    this.map = map;
    this.map$.emit(map);
  }

}
