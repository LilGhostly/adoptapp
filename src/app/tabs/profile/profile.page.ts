import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user = {
    name: 'John Doe',
    email: 'johndoe@example.com'
  };

  constructor() { }

  ngOnInit() {
    // Puedes cargar los datos del usuario aquí si es necesario
  }

  // Método para actualizar el perfil
  updateProfile() {
    console.log("Actualizar perfil...");
    // Aquí iría la lógica para actualizar el perfil
    // Por ejemplo, hacer una llamada a un servicio para actualizar los datos del usuario
    alert("Perfil actualizado.");
  }

}
