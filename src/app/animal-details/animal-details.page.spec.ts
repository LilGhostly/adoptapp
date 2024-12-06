import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalDetailsPage } from './animal-details.page';

describe('AnimalDetailsPage', () => {
  let component: AnimalDetailsPage;
  let fixture: ComponentFixture<AnimalDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
