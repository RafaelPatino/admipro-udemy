import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  ajuste: Ajustes = {
    temaURL : 'assets/css/colors/default.css',
    tema: 'default'
  }

  constructor( @Inject(DOCUMENT) private _Document ) {
    this.cargarAjustes();
   }

 guardarAjustes(){
   localStorage.setItem('ajustes',JSON.stringify(this.ajuste))  
 }

 cargarAjustes(){
   if (localStorage.getItem('ajustes')){
      this.ajuste = JSON.parse(localStorage.getItem('ajustes')) ;
     this.aplicarTema(this.ajuste.tema);
   }else{
    this.aplicarTema(this.ajuste.tema);
   }
 }

 aplicarTema(tema: string ){
  let url = `assets/css/colors/${ tema }.css`;
  this._Document.getElementById('tema').setAttribute('href', url );

  this.ajuste.tema = tema;
  this.ajuste.temaURL = url; 
  this.guardarAjustes();
}


}

interface Ajustes {
temaURL: string;
tema: string;
}