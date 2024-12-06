import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; // Asegúrate de importar correctamente
import { Observable } from 'rxjs';

@Component({
  selector: 'app-animal-post',
  templateUrl: './animal-post.page.html',
  styleUrls: ['./animal-post.page.scss'],
})
export class AnimalPostPage {
  animal = {
    type: '',                // Tipo de Animal
    age: '',                 // Edad Aproximada
    size: '',                // Tamaño en centímetros
    vaccinationStatus: '',   // Estado de Vacunación
    healthStatus: '',        // Estado de Salud
    description: '',         // Descripción
    photo: ''                // Foto
  };

  // Opciones dinámicas para Edad (Meses/Años)
  ageOptions: string[] = [];
  // Opciones dinámicas para Tamaño en Centímetros
  sizeOptions: string[] = [];

  constructor(private firestore: AngularFirestore) {
    // Rellenar opciones de edad
    this.generateAgeOptions();
    // Rellenar opciones de tamaño
    this.generateSizeOptions();
  }

  // Función para generar las opciones de edad
  generateAgeOptions() {
    // Meses de 1 a 12
    for (let i = 1; i <= 11; i++) {
      this.ageOptions.push(`${i} mes${i > 1 ? 'es' : ''}`);
    }
  
    // Años de 1 a 16
    for (let i = 1; i <= 16; i++) {
      this.ageOptions.push(`${i} año${i > 1 ? 's' : ''}`);
    }
  }

  // Función para generar las opciones de tamaño en centímetros
  generateSizeOptions() {
    for (let i = 10; i <= 165; i++) {
      this.sizeOptions.push(i.toString());
    }
  }

  // Función para tomar una foto usando la cámara
  async takePhoto() {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera, // Cámara en lugar de Galería
        quality: 90
      });

      // Asegúrate de que la foto existe antes de asignarla
      if (photo.dataUrl) {
        this.animal.photo = photo.dataUrl; // Guardamos la foto en la variable photo
      }
    } catch (error) {
      console.error('Error al tomar la foto: ', error);
    }
  }

  // Función para guardar los datos en Firestore
  async submitPost() {
    try {
      const animalsCollection = this.firestore.collection('animals');
      await animalsCollection.add(this.animal); // Guardar los datos en la colección
      console.log('Animal added successfully');
    } catch (error) {
      console.error('Error adding animal: ', error);
    }
  }
  
}
