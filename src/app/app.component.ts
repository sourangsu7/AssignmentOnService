import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userCollection:User[]=[];

  constructor(private userService:UserService){
  }
  ngOnInit(): void {
    this.userCollection= this.userService.users;
  }
}
