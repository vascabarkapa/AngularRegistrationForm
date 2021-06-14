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

  users: UserModule[] = [];

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

  public onDelete(id: number, isDeleted = false) {
    if (isDeleted) {
      this.userService.deleteUser(id).subscribe(() => {
        const index = this.users.findIndex(user => user.id === id);
        if (index >= 0) {
          this.users.splice(index, 1);
        }
      });
    }
  }

  public addNewUser(user: UserModule) {
    if (user) {
      this.users.push(user);
    }
    return;
  }
}