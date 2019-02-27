import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _Document, public _ajustes: SettingService  ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link : any) {

    this.aplicarCheck(link);
     this._ajustes.aplicarTema(tema);


  }

  aplicarCheck(link: any) {
      let selectores: any= document.getElementsByClassName('selector');

      for (let ref of selectores) {
        ref.classList.remove('working');
      }

      link.classList.add('working');
  }

  colocarCheck(){
    let selectores: any= document.getElementsByClassName('selector');
    let tema = this._ajustes.ajuste.tema;
      for (let ref of selectores) {
        if (ref.getAttribute('data-theme') === tema){
          ref.classList.add('working');
          break;
        }
      }

  }
  
}
