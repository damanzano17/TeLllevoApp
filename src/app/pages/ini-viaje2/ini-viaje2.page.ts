import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ini-viaje2',
  templateUrl: './ini-viaje2.page.html',
  styleUrls: ['./ini-viaje2.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IniViaje2Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClickCanViaje() {
    this.router.navigate(['/can-viaje']);
  }
  onClickHome() {
    this.router.navigate(['/home']);
  }
  onClickAnt() {
    this.router.navigate(['/iniciar-viaje']);
  }
}
