import { Component, OnInit, Input } from "@angular/core";
import { RecetteDetail } from "../../shared/interfaces/recette-detail.interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recette-detail",
  templateUrl: "./recette-detail.component.html",
  styleUrls: ["./recette-detail.component.scss"]
})
export class RecetteDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params["recette"]);
  }

  ngOnInit(): void {}
}
