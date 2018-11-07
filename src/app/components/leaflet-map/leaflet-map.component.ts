import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import leaflet from 'leaflet';

@Component({
  selector: 'leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit {
  @Input()
  lat: number;
  @Input()
  lng: number;

  @ViewChild('map') mapContainer: ElementRef;

  map: any;
  marker: any;

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    console.log(`${this.lat}, ${this.lng}`);
    this.map = leaflet.map('map').setView(new leaflet.LatLng(this.lat, this.lng), 14);

    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: '&copy; OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(this.map);

    this.marker = leaflet.marker([this.lat, this.lng]).addTo(this.map);
  }
}
