import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { SportsComponent } from './components/sports/sports.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { EconomicsComponent } from './components/economics/economics.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { CultureComponent } from './components/culture/culture.component';
import { HealthComponent } from './components/health/health.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { NewsDialogComponent } from './components/news-dialog/news-dialog.component';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportsComponent,
    PoliticsComponent,
    EconomicsComponent,
    EntertainmentComponent,
    CultureComponent,
    HealthComponent,
    NewsDialogComponent,
    CardNewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
