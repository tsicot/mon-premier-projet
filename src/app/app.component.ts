import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;

  appareils: any[];
  lastUpdate = new Promise(
    (resolve) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date);
      }, 2000);
    });

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }


  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onToutAllumer(): void {
    this.appareilService.switchOnAll();
  }

  onToutEteindre(): void {
    this.appareilService.switchOffAll();
  }
}
