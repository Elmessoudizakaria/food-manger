import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.scss'],
})
export class RecetteListComponent implements OnInit {
  @Input() public recettes;
  @Output() public getRecetteDetail = new EventEmitter<any>();
  @Output() public deleteRecete = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  getDetail(id: number) {
    this.getRecetteDetail.emit(id);
  }
  deleteOne(id: number) {
    this.deleteRecete.emit(id);
  }
}
