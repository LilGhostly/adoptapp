import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importar AngularFireAuth
import { from, Observable } from 'rxjs'; // Convertir promesas en observables
import { map } from 'rxjs/operators'; // Para manipular los resultados

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  // Registro de usuario con correo y contraseña
  register(email: string, password: string): Observable<any> {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }

  // Inicio de sesión con correo y contraseña
  login(email: string, password: string): Observable<any> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  // Cerrar sesión
  logout(): Observable<void> {
    return from(this.afAuth.signOut());
  }

  // Obtener el estado de autenticación
  isAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(user => !!user)); // Verifica si hay un usuario autenticado
  }
}
