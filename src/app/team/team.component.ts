import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  public title="Meet the team";
  public teamList=[{name:"List Name one",url:'../assets/images/images.jpg'},
  {name:"List Name Two",url:'../assets/images/images.jpg'},
  {name:"List Name Three",url:'../assets/images/images.jpg'},
  {name:"List Name four",url:'../assets/images/images.jpg'},
  ]

  ngOnInit(): void {
  }

}
