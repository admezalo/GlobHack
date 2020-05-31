import { Component, OnInit, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsDialogComponent } from '../news-dialog/news-dialog.component';
import { News } from '../../models/news'

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {
  @Input() mySelectedNews:News;
 
  constructor(public dialog : MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(NewsDialogComponent);
   
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
