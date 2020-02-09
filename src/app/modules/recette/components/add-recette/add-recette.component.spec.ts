import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecetteComponent } from './add-recette.component';

describe('AddRecetteComponent', () => {
  let component: AddRecetteComponent;
  let fixture: ComponentFixture<AddRecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
