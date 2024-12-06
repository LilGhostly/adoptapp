import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdoptionListPage } from './adoption-list.page';

describe('AdoptionListPage', () => {
  let component: AdoptionListPage;
  let fixture: ComponentFixture<AdoptionListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
