import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrls: ['./display-album.component.css']
})
export class DisplayAlbumComponent {
  @Input() album: Album | null = null;

  constructor(){}

  ngOnInit(){
  //  console.log("Getting data...");
  //  console.log("Tracks", this.album!.tracks);
  //  this.album!.tracks.forEach(element => console.log(element.title))
  }
}
