import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Zombieland', 'Oceans 11', "Always Be My Maybe", "The Martian"];

   constructor() { }

   ngOnInit() {
   }

}
