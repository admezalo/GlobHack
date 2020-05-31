import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsDialogComponent } from '../news-dialog/news-dialog.component';
import { DataService } from '../../services/data.service'
import { News } from '../../models/news'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: Array<News> = new Array();;
  one_news: News;
  two_news: News;


  constructor(
    public dialog: MatDialog,
    private service: DataService
  ) {

    this.service.getNews().subscribe(data => {
      this.one_news = data[0];
      this.two_news = data[4];
      this.news = data;
    });
    this.one_news = new News();
    this.two_news = new News();

  }

  openDialog() {
    const dialogRef = this.dialog.open(NewsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }


}