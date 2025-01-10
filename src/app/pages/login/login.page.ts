import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, FormsModule],
})
export class LoginPage {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
}

