import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viajes-disponibles',
  templateUrl: './viajes-disponibles.page.html',
  styleUrls: ['./viajes-disponibles.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViajesDisponiblesPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClick() {
    this.router.navigate(['/home']);
  }
  onClickTomarViaje() {
    this.router.navigate(['/tomar-viaje']);
  }
}
