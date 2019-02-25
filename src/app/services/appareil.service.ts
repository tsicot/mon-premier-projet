import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [];

  constructor(private httpClient: HttpClient) {
  }

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  getAppareilById(id: number) {
    return this.appareils.find(
      (appareilObj) => {
        return appareilObj.id === id;
      }
    );
  }

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOn(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOff(index: number) {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string) {
    const appareilObj = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObj.name = name;
    appareilObj.status = status;
    appareilObj.id = this.appareils[(this.appareils.length - 1)].id + 1;

    this.appareils.push(appareilObj);
    this.emitAppareilSubject();
  }

  saveAppareilToServer() {
    this.httpClient.put('https://mon-premier-projet-df84e.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé');
        },
        (error) => {
          console.log('Erreur ' + error);
        }
      );
  }

  getAppareilFromServer() {
    this.httpClient.get<any[]>('https://mon-premier-projet-df84e.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur de chargement : ' + error);
        }
      );
  }
}
