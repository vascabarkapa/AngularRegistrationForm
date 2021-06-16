import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModule } from '../user.module';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html'
})
export class TableUsersComponent {

  users: UserModule[] = [];
  collectionSize: number;

  filter = {
   firstName:'',
   lastName:'',
   gender:'',
   email:'',
   phoneNumber:'',
   homeTown:''
  };

  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  page = 1;
  pageSize = 10;
defaultUsers:UserModule[] = [];
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  search() {
    console.log(this.filter.gender);
    this.users=this.defaultUsers.filter(res => {
      return res.first_name.toLocaleLowerCase().match(this.filter.firstName.toLocaleLowerCase()) && 
            res.last_name.toLocaleLowerCase().match(this.filter.lastName.toLocaleLowerCase()) && 
            res.gender == this.filter.gender && 
            res.email.toLocaleLowerCase().match(this.filter.email.toLocaleLowerCase()) && 
            res.phone_number.toLocaleLowerCase().match(this.filter.phoneNumber.toLocaleLowerCase()) && 
            res.home_town.toLocaleLowerCase().match(this.filter.homeTown.toLocaleLowerCase());
    });
  }

  resetSearch() {
    this.filter.firstName="";
    this.filter.lastName="";
    this.filter.gender="";
    this.filter.email="";
    this.filter.phoneNumber="";
    this.filter.homeTown="";

    this.getAllUsers();
  }

  public getAllUsers() {
    this.userService.getUsers().subscribe((response: UserModule[]) => {
      this.users = response;
      this.defaultUsers = response;
      this.collectionSize = this.users.length;
    });
  }

  public onDelete(id: number, isDeleted = false) {
    if (isDeleted) {
      this.userService.deleteUser(id).subscribe(() => {
        const index = this.users.findIndex(user => user.id === id);
        if (index >= 0) {
          this.users.splice(index, 1);
          this.getAllUsers();
        }
      });
    }
  }

  public addNewUser(user: UserModule) {
    if (user) {
      this.users.push(user);
      this.getAllUsers();
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

