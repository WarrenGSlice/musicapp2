import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artists.model';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent {
  artists: Artist[] = [];
  selectedArtist: Artist |null = null;

  constructor(private route: ActivatedRoute, private service: MusicServiceService){}

  //ngOnInit()
  //{
  //  this.route.queryParams.subscribe(params => {
  //    console.log("Getting data...");
  //    this.artists = this.service.getArtists();
  //    this.selectedArtist = null;
  //  });
  //}

  ngOnInit()
  {
    console.log("Getting data...");
    this.service.getArtists((artists: Artist[]) => {
      this.artists = artists;
      console.log('this.artists', this.artists);
      // new
      //for (let i = 0; i < artists.length; i++) {
      //  this.artists[i].artist = String(Object.values(artists[i]));
      //}
    });
  }

  onSelectedArtist(artist: Artist) {
    console.log("Selected Artist of " + artist.artist);
    this.selectedArtist = artist;
  }
}
