import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareils = [{'name':"Machine à laver",'status':"éteint"},
  {'name':"Télévision",'status':"allumé"},
  {'name':"Ordinateur",'status':"éteint"}];

  lastUpdate = new Promise(
    (resolve,reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date);
      },2000);
    });

    constructor(){
      /*this.appareils = [{'name':"Machine à laver",'status':"éteint"},
      {'name':"Télévision",'status':"éteint"},
      {'name':"Ordinateur",'status':"éteint"}];*/
      setTimeout(
        ()=>{
          this.isAuth = true;
        },4000
      );
    };
    onToutAllumer(){
      for (let i in this.appareils){
        this.appareils[i].status = "allumé";
      }
    };

    onToutEteindre(){
      for (var i in this.appareils){
        this.appareils[i].status = "éteint";
      }
    };
  }
