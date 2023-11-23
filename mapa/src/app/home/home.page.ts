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
    }).addTo(this.mapa).bindPopup("Sua vizinhança");

    const marcador = leaf.icon({
      iconUrl:"../../assets/icon/marcador.png",
      iconSize:[20,30],
      popupAnchor: [0,-10],      
    })

    const miramar = leaf.icon({
      iconUrl:"../../assets/icon/miramar.png",
      iconSize:[25,25],
      popupAnchor: [0,-10],      
    })

    const praimar = leaf.icon({
      iconUrl:"../../assets/icon/praimar.png",
      iconSize:[60,60],
      popupAnchor: [0,-10],      
    })

    const balneario = leaf.icon({
      iconUrl:"../../assets/icon/balneario.png",
      iconSize:[25,25],
      popupAnchor: [0,-10],      
    })

    const patioIporanga = leaf.icon({
      iconUrl:"../../assets/icon/patioiporanga.png",
      iconSize:[25,25],
      popupAnchor: [0,-10],      
    })

    const EmbareSantos = leaf.icon({
      iconUrl:"../../assets/icon/embare.png",
      iconSize:[35,25],
      popupAnchor: [0,-10],      
    })

    leaf.marker({lat:lat, lng:lng}, {icon:marcador}).addTo(this.mapa).bindPopup("Sua casa");

    leaf.marker({lat:-23.9665146382376, lng:-46.33464071534059}, {icon:miramar}).addTo(this.mapa).bindPopup("Shopping Miramar R. Euclides da Cunha, 21 - Gonzaga, Santos - SP, 11065-900");

    leaf.marker({lat:-23.976999299885785, lng:-46.3100000003104146}, {icon:praimar}).addTo(this.mapa).bindPopup("Shopping Praimar R. Alexandre Martins, 80 - Aparecida, Santos - SP, 11025-252");

    leaf.marker({lat:-23.968941067606657, lng:-46.332401509817956}, {icon:balneario}).addTo(this.mapa).bindPopup("Shopping Balneario Av. Ana Costa, 549 - Gonzaga, Santos - SP, 11060-003");

    leaf.marker({lat:-23.965339406532094, lng:-46.33230250161972}, {icon:patioIporanga}).addTo(this.mapa).bindPopup("Shopping Pátio Iporanga Av. Ana Costa, 465 - Gonzaga, Santos - SP, 11060-001");

    leaf.marker({lat:-23.973796307413135, lng: -46.31875793579983}, {icon:EmbareSantos}).addTo(this.mapa).bindPopup("Shopping Embaré Santos Av. Dr. Epitácio Pessoa, 172 - Embaré, Santos - SP, 11040-096");

  }  
}