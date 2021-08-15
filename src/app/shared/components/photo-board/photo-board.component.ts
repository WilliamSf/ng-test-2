import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Photo } from './interfaces/photo';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent implements OnInit, OnChanges {

  @Input() public photos: Photo[];

  public rows: any[][] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupColumns(changes.photos.currentValue);
    }
  }

  private groupColumns(photos: Photo[]): any[][] {
    const newRows = [];
    for (let index = 0; index < photos.length; index += 4) {
      newRows.push(photos.slice(index, index + 4));
    }
    return newRows;
  }

}
