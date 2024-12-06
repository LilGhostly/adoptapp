import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalPostPageRoutingModule } from './animal-post-routing.module';

import { AnimalPostPage } from './animal-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalPostPageRoutingModule
  ],
  declarations: [AnimalPostPage]
})
export class AnimalPostPageModule {}
