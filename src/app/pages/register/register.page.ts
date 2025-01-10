import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterPage implements OnInit {

  constructor(private alertController: AlertController, private router:Router) { }

  ngOnInit() {
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Usuario registrado con éxito',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/login']); // Navegamos al login al cerrar la alerta
          },
        },
      ],
    });

    await alert.present();
  }
}
