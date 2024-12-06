import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.page.html',
  styleUrls: ['./adoption-list.page.scss'],
})
export class AdoptionListPage implements OnInit {
  animals: any[] = [];
  dogs: any[] = [];
  cats: any[] = [];
  others: any[] = [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.loadAnimals();
  }

  // Cargar todos los animales desde la base de datos
  loadAnimals() {
    this.firestore.collection('animals').get().subscribe(querySnapshot => {
      this.animals = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return { id: doc.id, ...data || {} }; // Usar un objeto vacío si data es null/undefined
      });

      // Aplicar el filtro inmediatamente después de cargar los datos
      this.filterAnimals();
    });
  }

  // Filtrar los animales en perros, gatos y otros
  filterAnimals() {
    this.dogs = this.animals.filter(animal => animal.type === 'Perro');
    this.cats = this.animals.filter(animal => animal.type === 'Gato');
    this.others = this.animals.filter(animal => animal.type === 'Otro');
  }


  // Manejar el clic en el animal para mostrar detalles
  viewDetails(animalId: string) {
    console.log("Detalles del animal con ID: ", animalId);
    // Aquí podrías redirigir a una página de detalles si lo necesitas
  }
}
