import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdoptionListPageRoutingModule } from './adoption-list-routing.module';

import { AdoptionListPage } from './adoption-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptionListPageRoutingModule
  ],
  declarations: [AdoptionListPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdoptionListPageModule {}
