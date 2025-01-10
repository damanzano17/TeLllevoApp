import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IntroPage implements OnInit {

  constructor(private router:Router) { }

  onClick(destination: string) {
    this.router.navigate([destination]);
  }

  ngOnInit() {
  }

}
