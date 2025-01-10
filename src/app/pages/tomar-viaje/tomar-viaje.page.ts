import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tomar-viaje',
  templateUrl: './tomar-viaje.page.html',
  styleUrls: ['./tomar-viaje.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TomarViajePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClick() {
    this.router.navigate(['/home']);
  }
}
