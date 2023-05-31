import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  constructor(public userService: UserService) {
  }
  ngOnInit(): void {

  }
  onSetToInactive(id: number) {
    this.userService.updateStatus(id, 'Inactive');
  }
}
