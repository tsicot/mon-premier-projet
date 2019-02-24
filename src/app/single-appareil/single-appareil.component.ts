import {Component, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name = 'Appareil';
  status = 'Status';

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const appareil = this.appareilService.getAppareilById(+this.route.snapshot.params.id);
    this.name = appareil.name;
    this.status = appareil.status;
  }

}
