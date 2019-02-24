import {Subject} from 'rxjs/Subject';

export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [{id: 1, name: 'Machine à laver', status: 'éteint'},
    {id: 2, name: 'Télévision', status: 'allumé'},
    {id: 3, name: 'Ordinateur', status: 'éteint'}];

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
}
