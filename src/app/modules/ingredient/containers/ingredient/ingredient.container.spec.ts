import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IngredientContainer } from "./ingredient.container";

describe("IngredientContainer", () => {
  let component: IngredientContainer;
  let fixture: ComponentFixture<IngredientContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientContainer]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
