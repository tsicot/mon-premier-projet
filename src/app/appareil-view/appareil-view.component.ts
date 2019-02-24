import {Component, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  appareilSubscription: Subscription;

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
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareil: any[]) => {
        this.appareils = appareil;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onToutAllumer(): void {
    this.appareilService.switchOnAll();
  }

  onToutEteindre(): void {
    this.appareilService.switchOffAll();
  }

}
