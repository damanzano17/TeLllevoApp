import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private router:Router) {}
  onClickListViajes() {
    this.router.navigate(['/listado-viajes']);
  }
  onClickIniViaje() {
    this.router.navigate(['/iniciar-viaje']);
  }
  onClickBuscViajes() {
    this.router.navigate(['/viajes-disponibles']);
  }
  onClickLogin() {
    this.router.navigate(['/login']);
  }
}
