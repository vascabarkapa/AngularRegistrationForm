import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../services/user.service';
import { UserModule } from '../user.module';

@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.css']
})
export class NewModalComponent implements OnInit {

  user: UserModule;
  @Output() newUser = new EventEmitter();
  constructor(config: NgbModalConfig, private modalService: NgbModal, private userService: UserService) {

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content);
  }

  onAddUser(data) {
    const user = new UserModule;
    user.first_name = data.firstName;
    user.last_name = data.lastName;
    user.gender = data.gender;
    user.email = data.email;
    user.phone_number = data.phoneNumber;
    user.home_town = data.homeTown;

    this.userService.addUser(user).subscribe((response: UserModule) => {
      this.newUser.emit(response);
    });
    this.modalService.dismissAll();
  }
}
