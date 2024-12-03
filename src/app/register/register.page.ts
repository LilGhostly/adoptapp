import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  name: string = ''; // Nueva variable para el nombre
  phone: string = ''; // Nueva variable para el teléfono (opcional)

  constructor(private authService: AuthService, private navCtrl: NavController) {}

  private isValidEmail(email: string): boolean {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onRegister() {
    if (!this.isValidEmail(this.email)) {
      alert('El correo electrónico no es válido');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!this.name) {
      alert('El nombre es requerido');
      return;
    }

    // Validación del teléfono (opcional)
    if (this.phone && this.phone.trim() !== '') {
      const phoneDigits = this.phone.replace(/^\+569/, ''); // Eliminar el prefijo +569
      if (!phoneDigits.match(/^\d{8}$/)) {
        alert('El número de teléfono debe contener 8 dígitos');
        return;
      }
    }

    // Si todos los campos son válidos, proceder con el registro
    this.authService.register(this.email, this.password).subscribe(
      (res) => {
        console.log('Registro exitoso:', res);
        this.navCtrl.navigateForward('/login'); // Redirigir al login
      },
      (error) => {
        console.error('Error al registrar el usuario:', error);
        alert('Error al registrar el usuario'); // Mensaje de error
      }
    );
  }

  // Función para volver al login
  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
