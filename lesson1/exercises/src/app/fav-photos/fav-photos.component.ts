import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Pictures';
  image1 = 'https://images.squarespace-cdn.com/content/v1/546d3db5e4b0b9855c7c3bdf/1528304965325-KQ43MWNGG6JFIJOJRKOZ/ke17ZwdGBToddI8pDm48kGsaEdSj_wCqj6MvT3P6Il4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKccmfvSsNIEmZuv49uUNaOrnWj3x75-sEVPp-JuJqvMzwFzRwAK1QVOCuchjJceCan/Dozier-Splash.gif?format=1000w';
  image2 = 'https://images.squarespace-cdn.com/content/v1/546d3db5e4b0b9855c7c3bdf/1516058084986-7YKPOGGW8T6LDKFT3UUF/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/Royals+Export+1-17.jpg?format=1000w';
  image3 = 'https://media.giphy.com/media/eCqFYAVjjDksg/giphy.gif';

  constructor() { }

  ngOnInit() {
  }

}