import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listado-viajes',
  templateUrl: './listado-viajes.page.html',
  styleUrls: ['./listado-viajes.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListadoViajesPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/home']);
  }
  onClickCrearViaje() {
    this.router.navigate(['/crear-viaje']);
  }
}
