import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../models/news';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private api: string = "https://lit-lowlands-53186.herokuapp.com/api/assistant";

  constructor(private http: HttpClient) {

  }
  getNews() {
    return this.http.get<News[]>(`${this.api}/main/news`);
  }


  getInfoInteractionApi = (valueString: any): Observable<any> => {
    var body = { input: valueString };
    return this.http.post(`${this.api}/conversation`, body);
  }

}