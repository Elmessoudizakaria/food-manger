import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-recette-list",
  templateUrl: "./recette-list.component.html",
  styleUrls: ["./recette-list.component.scss"]
})
export class RecetteListComponent implements OnInit {
  @Input() public recettes;
  @Output() public getRecetteDetail = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  getDetail(id: number) {
    console.log("from child ", id);
    this.getRecetteDetail.emit(id);
  }
}
