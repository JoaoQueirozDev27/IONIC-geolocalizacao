import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as leaf from 'leaflet';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  mapa: any = leaf.map;

  constructor() {}
  ngOnInit(): void 
  {
    const printCurrentPosition = async () => 
    {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log(coordinates);
      this.carregamapa(coordinates.coords.latitude,coordinates.coords.longitude);
    }
    printCurrentPosition();      
  }

  carregamapa(lat :any,lng :any){
    console.log("funcionou",lat ,"-",lng)
    this.mapa = leaf.map('mapaid',{
      center: [lat,lng],
      zoom: 16
    })
    leaf.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.mapa);
    var circle = leaf.circle([lat, lng], {
      color: '#00cca7',
      fillColor: '#018f75',
      fillOpacity: 0.5,
      radius: 50
    }).addTo(this.mapa).bindPopup("Achou");
  }
  
}
