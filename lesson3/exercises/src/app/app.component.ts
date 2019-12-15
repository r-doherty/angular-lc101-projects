import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Exercises: Angular Lesson 3';

  color = 'green';
  rocketCenter = "120px"
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffStatus = false;
  routingStatus = [false, false, false, false]
  astronautChat = "Houston, we are ready when you are!";

  routingCheck(width, height, rocketImage) {
    if(width > 120000 || width < -90000 || height < 30000 || height > 310000)
    {
      this.color = 'darkorange';
      if(width > 130000)
      {
        alert("Houston: You asleep up there? Command taking the reigns to get us back on course.");
        this.routingStatus[2] =  true;
      }
      else if(width < -110000)
      {
        alert("Houston: You asleep up there? Command taking the reigns to get us back on course.");
        this.routingStatus[3] =  true;
      }
      else if(height > 330000)
      {
        alert("Houston: Warning partner, reaching maximum altitude, initializing remote navigation");
        this.routingStatus[0] =  true;
      }
      else if(height < 20000)
      {
        if(confirm("Houston: Getting awfully low there partner, initiate landing protocol?"))
        {
          this.landingProtocol(rocketImage);
        }
        else
        {
          alert("Houston: Copy that. Remote auto-pilot engaged.");
          this.routingStatus[1] =  true;
        }        
      }
    }
    else
    {
      this.color = 'blue';
      for(let i = 0; i < this.routingStatus.length; i++)
      {
        this.routingStatus[i] = false;
      }
    }
  }
  
  takeOffProtocol(rocketImage)
  {
    if(confirm("Confirm that the shuttle is ready for takeoff."))
    {
      this.message = "Shuttle in flight";
      this.color = "blue";
      this.height = 30000;
      this.takeOffStatus = true;
      let movement = parseInt(rocketImage.style.bottom) + 30 + 'px';
      rocketImage.style.bottom = movement;
      this.astronautChat = "Houston... We have liftoff! (Man, I've always wanted to say that)";
      rocketImage.style.left = this.rocketCenter;
    }
    else
    {
      alert("Take Off protocol aborted.");
    }
  }

  landingProtocol(rocketImage)
  {
    alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed";
    this.color = "green";
    this.height = 0;
    this.width = 0;
    this.takeOffStatus = false;
    this.astronautChat = "Eagle has landed!";
    rocketImage.style.left = this.rocketCenter;
    rocketImage.style.bottom = 0;
  }

  missionAbortProtocol(rocketImage)
  {
    if(confirm("Abort Mission?"))
    {
      alert("Emergency protocol enacted. Mission Aborted.")
      this.message = "Mission aborted.";
      this.color = "red";
      this.height = 0;
      this.takeOffStatus = false;
      this.astronautChat = "Phew! That was a close one.";
      rocketImage.style.left = this.rocketCenter;
      rocketImage.style.bottom = 0;
    }
    else
    {
      alert("Emergency protocol denied. Shuttle systems continuing.");
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction==='right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      this.astronautChat = "Yeehaw! Full speed ahead";
    }
    else if (direction==='left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      this.astronautChat = "Beep! Beep! Reverse";
    }
    else if (direction==='up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      this.astronautChat = "Wooooo! Feeling those G's";
    }
    else if (direction==='down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
      this.astronautChat = "How low can we go?";
    }
    this.routingCheck(this.width, this.height, rocketImage);
  }
}
