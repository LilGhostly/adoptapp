import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalPostPage } from './animal-post.page';

describe('AnimalPostPage', () => {
  let component: AnimalPostPage;
  let fixture: ComponentFixture<AnimalPostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
