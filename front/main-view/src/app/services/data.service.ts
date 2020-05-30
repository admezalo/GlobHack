import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Album } from '../models/album';
import { Artist } from '../models/artist';
import { Genre } from '../models/genre';
import { Country } from '../models/country';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  server : string = "https://nodejs-restapi2020.herokuapp.com";

    constructor(private http:HttpClient) {
        
    }
    getAlbums(){
      return this.http.get<Album[]>(this.server+'/allAlbum');
    }

    getAlbum(nombre:string){
      return this.http.get<Album[]>(this.server+'/servicios_coleccion/public/api/album/'+nombre);
    }

    saveAlbum(album:Album){
      return this.http.post(this.server+'/servicios_coleccion/public/api/albums/add',album);
    }

    deleteAlbum(nombre:string){
      return this.http.delete(''+nombre);
    }

    //servicios artista
    getArtists(){
      return this.http.get<Artist[]>(this.server+'/servicios_coleccion/public/api/artistas');
    }
    getAlbumForArtist(nombreArtista:string){
      return this.http.get<Album[]>(this.server+'/servicios_coleccion/public/api/album/ar/'+nombreArtista);
    }
    insertArtist(artista:Artist){
      return this.http.post(this.server+"/servicios_coleccion/public/api/artista/add",artista);
    }

    //servicios Género 
    getGenre(){
      return this.http.get<Genre[]>(this.server+'/servicios_coleccion/public/api/generos');
    }

    getGenreAlbum(genre:string){
      return this.http.get<Album[]>(this.server+'/servicios_coleccion/public/api/album/ge/'+genre);
    }

    //servicios País

    getCountry(){
      return this.http.get<Country[]>(this.server+'/servicios_coleccion/public/api/pais');
    }


}