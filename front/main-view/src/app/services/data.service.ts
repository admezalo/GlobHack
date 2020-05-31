import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { News } from '../models/news';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  api : string = "https://lit-lowlands-53186.herokuapp.com/api/assistant/main/news";

    constructor(private http:HttpClient) {
        
    }
    getNews(){
      return this.http.get<News[]>(this.api);
    }

}