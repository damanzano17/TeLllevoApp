import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router}  from '@angular/router';

@Component({
  selector: 'app-iniciar-viaje',
  templateUrl: './iniciar-viaje.page.html',
  styleUrls: ['./iniciar-viaje.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IniciarViajePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClickHome() {
    this.router.navigate(['/home']);
  }
  onClickIniViaje() {
    this.router.navigate(['/ini-viaje2']);
  }
}
