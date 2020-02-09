import { Component, OnInit, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-recette",
  templateUrl: "./add-recette.component.html",
  styleUrls: ["./add-recette.component.scss"]
})
export class AddRecetteComponent implements OnInit {
  @Input() public form;
  @Input() public submit;
  @Input() public toppingList;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(event) {
    event.stopPropagation();
    this.submit();
  }
}
