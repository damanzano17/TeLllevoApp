import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-can-viaje',
  templateUrl: './can-viaje.page.html',
  styleUrls: ['./can-viaje.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CanViajePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClickHome() {
    this.router.navigate(['/home']);
  }
}
