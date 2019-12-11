import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  linksTitle = "Favorite Sites"
  favLinks = ['https://www.rjdevents.com', 'https://fivethirtyeight.com/']

  constructor() { }

  ngOnInit() {
  }

}
