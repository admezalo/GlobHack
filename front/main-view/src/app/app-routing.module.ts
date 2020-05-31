import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SportsComponent } from './components/sports/sports.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { EconomicsComponent } from './components/economics/economics.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { CultureComponent } from './components/culture/culture.component';
import { HealthComponent } from './components/health/health.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'política', component: PoliticsComponent },
  { path: 'economía', component: EconomicsComponent },
  { path: 'entretenimiento', component: EntertainmentComponent },
  { path: 'cultura', component: CultureComponent },
  { path: 'salud', component: HealthComponent },
  { path: 'deportes', component: SportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
