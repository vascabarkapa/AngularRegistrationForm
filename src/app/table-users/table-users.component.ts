import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModule } from '../user.module';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html'
})
export class TableUsersComponent {

  page=10;
  USERS: UserModule[] = [];
  users = this.USERS;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers() {
    let resp = this.userService.getUsers();
    resp.subscribe(user => this.users = user as UserModule[]);
  }
}