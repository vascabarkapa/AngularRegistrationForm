import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  collectionSize: number;

  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  page = 1;
  pageSize = 10;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  refreshCountries() {
    this.users = this.users
      .map((user, i) => ({id: i + 1, ...user}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  public getAllUsers() {
    this.userService.getUsers().subscribe((respnse: UserModule[]) => {
      this.users = respnse,
      this.collectionSize = this.users.length;
    });
    
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

  getSelectedUser(id: number) {
    this.userService.getOneUser(id).subscribe(resp => {
      console.log(resp);
    });
  }

  public addEditUser(user: UserModule) {
    if (user) {
      this.getAllUsers();
    }
    return;
  }
}
