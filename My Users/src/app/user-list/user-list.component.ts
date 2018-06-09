import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'user-list',
  templateUrl:'../users.html',
  styles: []
})
export class UserListComponent implements OnInit {

  public userList = [];
  public errorMsg;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(data => this.userList = data,
                error => this.errorMsg = error);
  }
}
