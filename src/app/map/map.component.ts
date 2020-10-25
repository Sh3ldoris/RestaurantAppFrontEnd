import { Component, OnInit, ViewChild  } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  zoom = 19;
  center: google.maps.LatLngLiteral = {
    lat: 48.814794,
    lng: 19.462716
  };
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap'
  };
  markers = [];
  infoContent = '';

  ngOnInit() {
    this.markers.push({
        position: {
          lat: this.center.lat,
          lng: this.center.lng
        },
        label: {
          color: 'blue',
          text: 'Havky Mňauky'
        },
        title: "Marker Title",
        info: "Marker info",
        options: {
          animation: google.maps.Animation.DROP
        }
      });
  }
}
