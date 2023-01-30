import { Component, OnInit } from '@angular/core';

import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from '@ionic-native/google-maps/ngx';
import { Platform } from '@ionic/angular';


declare let google;

@Component({
  selector: 'app-anfahrt',
  templateUrl: './anfahrt.page.html',
  styleUrls: ['./anfahrt.page.scss'],
})
export class AnfahrtPage implements OnInit {
  private map: any;
  private marker: any;

  ngOnInit() {
  }

  ionViewDidEnter() {
    function initMap() {
      const myLatLng = {
        lat: 48.266512,
        lng: 16.449592
      };
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.266512, lng: 16.449592 },
        zoom: 15
      });
      this.marker = new google.maps.Marker({
        position: { lat: 48.266512, lng: 16.449592 },
        map: this.map
      });
      }
    }
  }

