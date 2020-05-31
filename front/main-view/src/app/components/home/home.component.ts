import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsDialogComponent } from '../news-dialog/news-dialog.component';
import { News } from '../../models/news'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() mySelectedNews:News;
  news : Array<News>;
  one_news : News;

  noticia: News = {
    title: "Las nuevas medidas contra covid-19 en Bogotá, Cali y Cartagena",
    text: "Este sábado los ministerios del Interior y de Salud pusieron en conocimiento las nuevas disposiciones para mitigar el impacto del coronavirus en tres de las ciudades más afectadas:  Bogotá, Cali y Cartagena. La ministra del Interior, Alicia Arango, explicó que “se evaluó y se definió en estos casos particulares plantear la adopción de algunas medidas adicionales en el marco de lo dispuesto en el  decreto 749 de 2020”, que dicta las condiciones del nuevo aislamiento que empezará en el país este lunes 1 de junio.",
    image: "https://d3j6lal8h4ou1t.cloudfront.net/uploads/2017/09/Bogot%C3%A1-ciudad-123rf-400x200.jpg",
    category: "Salud"
  };

  noticia2: News = {
    title: "Segundo intento de lanzamiento de SpaceX",
    text: "El lanzamiento de una nave tripulada Crew Dragon de la compañía SpaceX desde el el Centro Espacial Kennedy de la Nasa (Florida, EE. UU.) hacia la Estación Espacial Internacional (EEI) está programado para este sábado 30 de mayo a las 2:22 p. m. (hora de Colombia). Sin embargo, el clima en Florida (EEUU) representa un reto y hace que las probabilidades de que se produzca el lanzamiento sean de 50 por ciento. El miércoles pasado el mal tiempo impidió el despegue de la misión Demo-2 desde Cabo Cañaveral, la Nasa y la compañía aeronáutica SpaceX. ",
    image: "https://universitam.com/academicos/wp-content/uploads/2018/02/4-lzlcnib-e1518008104505-400x200.jpg",
    category: "Cultura"
  };

  noticia3: News = {
    title: "Chile alcanza un nuevo récord de muertes diarias por el coronavirus",
    text: "Chile registró este jueves un nuevo récord de muertes por coronavirus en las últimas 24 horas, con 49 fallecidos, para totalizar 890 decesos en 86.943 contagios desde que el 3 de marzo registró el primer caso.",
    image: "https://www.quimicaysociedad.org/wp-content/uploads/2020/05/noticia_covid-400x200.jpg",
    category: "Salud"
  };

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(NewsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
