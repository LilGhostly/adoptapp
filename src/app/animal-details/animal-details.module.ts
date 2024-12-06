import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalDetailsPageRoutingModule } from './animal-details-routing.module';

import { AnimalDetailPage } from './animal-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalDetailsPageRoutingModule
  ],
  declarations: [AnimalDetailPage]
})
export class AnimalDetailsPageModule {}
