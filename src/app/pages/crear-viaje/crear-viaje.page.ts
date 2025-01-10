import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CrearViajePage implements OnInit {
  selectedDestination: string = '';

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
  onDestinationChange(event: any) {
    const destination = event.detail.value;
    this.selectedDestination = destination;
    console.log('Destino seleccionado: ', destination);
  }
}
