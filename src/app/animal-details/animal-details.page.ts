import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-details.page.html',
  styleUrls: ['./animal-details.page.scss'],
})
export class AnimalDetailPage implements OnInit {
  animalId: number | null = null;
  animal = {
    name: '',
    type: '',
    description: '',
    age: '',
    image: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.animalId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.loadAnimalDetails();
  }

  loadAnimalDetails() {
    if (this.animalId === 1) {
      this.animal = {
        name: 'Rex',
        type: 'Perro',
        description: 'Un perro amigable que busca un hogar.',
        age: '3 años',
        image: 'https://example.com/rex.jpg',
      };
    } else if (this.animalId === 2) {
      this.animal = {
        name: 'Miau',
        type: 'Gato',
        description: 'Un gato cariñoso que necesita cariño.',
        age: '2 años',
        image: 'https://example.com/miau.jpg',
      };
    } else {
      this.animal = {
        name: 'Animal no encontrado',
        type: '',
        description: '',
        age: '',
        image: '',
      };
    }
  }
}
