export class AppareilService {
  appareils = [{name: 'Machine à laver', status: 'éteint'},
    {name: 'Télévision', status: 'allumé'},
    {name: 'Ordinateur', status: 'éteint'}];

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOn(index: number) {
    this.appareils[index].status = 'allumé';
  }

  switchOff(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
