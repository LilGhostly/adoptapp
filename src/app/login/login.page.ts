import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private navCtrl: NavController) {}

  onLogin() {
    // Llamamos al servicio de login
    this.authService.login(this.email, this.password).subscribe(
      (res) => {
        console.log('Login exitoso:', res);
        this.navCtrl.navigateForward('/home'); // Navegar a la página principal
      },
      (error) => {
        console.error('Error de login:', error);
        alert('Credenciales incorrectas'); // Mostrar un mensaje de error
      }
    );
  }

  navToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  onForgotPassword() {
    // Implementación para recuperar contraseña
  }
}
