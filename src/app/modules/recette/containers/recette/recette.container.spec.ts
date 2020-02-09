import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RecetteContainer } from "./recette.container";

describe("RecetteContainer", () => {
  let component: RecetteContainer;
  let fixture: ComponentFixture<RecetteContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecetteContainer]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
