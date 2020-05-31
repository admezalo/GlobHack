import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { News } from '../../models/news';

export interface DialogData {
  news:News;
}

@Component({
  selector: 'app-news-dialog',
  templateUrl: './news-dialog.component.html',
  styleUrls: ['./news-dialog.component.css']
})
export class NewsDialogComponent implements OnInit {
  @Input() myCurrentNews:News;
  currentNew : News = new News();
  
  constructor(public dialogRef:MatDialogRef<NewsDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
    this.currentNew = data.news;
  }

  ngOnInit(): void {
  }

}