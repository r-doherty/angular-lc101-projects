import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   activationArray: boolean[] = [false, false, false]
   active: boolean = true;
   location: string = 'center';

   constructor() { }

   ngOnInit() { }

   resetActivations()
   {
      for(let i = 0; i < this.activationArray.length; i++)
      {
         if(this.activationArray[i] === true)
         {
            this.activationArray[i] = false;
         }
      }
   }

   shiftLocation(oldLocation: string) {
      while (this.location === oldLocation) {
         this.location = ['left', 'right', 'center'][Math.floor(Math.random()*3)];
      }
      return this.location;
   }

}
