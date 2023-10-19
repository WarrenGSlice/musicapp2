import { Component, Input } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent {
  @Input() artist: Artist | null = null;
  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService){}

  ngOnInit() {
    console.log("Getting data...");
		this.service.getAlbumsOfArtist(this!.artist!.artist,
      (albums: Album[]) => this.albums = albums);
	}

  public onSelectAlbum(album:Album)
  {
    console.log("Selected Album of " + album.title);

    this.selectedAlbum = album;
  }
}
