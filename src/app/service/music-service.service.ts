import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { Track } from '../models/tracks.model';
import { HttpClient } from '@angular/common/http';

// Set Injectable to get all services in project
@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  private host = "http://localhost:5000";
  albums: Album[] = exampledata;
  constructor(private http: HttpClient) { }

  // GetArtists retrieves the artists from the data set
  // and returns them to the view in a list format
  // Typescript syntax to define a callback funciton with
  // an array of Artist as a parameter. The callback returns void.
  // getArtists also returns void, however these are defined independently
  public getArtists(callback: (artists: Artist[]) => void): void {
    
    this.http.get<Artist[]>(this.host + "/artists")
    .subscribe((artists: Artist[]) => {
      callback(artists);
    });
  }

  // GetAlbums retrieves the albums from the data set
  // and returns them to the view in a list format
  public getAlbums(callback: (albums: Album[]) => void): void {
    // Return the list of Albums
    this.http.get<Album[]>(this.host + "/albums").subscribe((albums: Album[]) => {
      callback(albums);
    })
  }

  // GetAlbumsOfArtist retrieves all the albums from one
  // artist in the data set and returns them to the view
  public getAlbumsOfArtist(artistName: String, callback: (albums: Album[]) => void): void {

    let request = this.host + `/albums/${artistName}`;
    console.log('request', request);
    this.http.get<Album[]>(request).subscribe((albums: Album[]) => {
      console.log('have albums', albums);
      callback(albums);
    });
  }

  // Create Album creates a new album and pushes it into the data set
  public createAlbum(album: Album, callback: () => void): void {
    // Add a new Album to the list of Albums
    this.http.post<Album>(this.host + "/albums", album).subscribe((data) => {
      callback();
    });
  }

  // UpdateAlbum will update and change details about a specific album
  // in the data set
  public updateAlbum(album: Album, callback: () => void): void {
    // Search for the Album in the list of Albums and replace it in the list
    this.http.put<Album>(this.host + "/albums", album).subscribe((data) => {
      callback();
    });
  }

  // Delete Album will search for an album from its albumId and remove it
  // from the data set
  public deleteAlbum(id: number, callback: () => void): void {
    // Search for the Album in the list of Albums and delete from the list
    this.http.delete(this.host + "/albums/" + id).subscribe((data) => {
      callback();
    });
  }
}
