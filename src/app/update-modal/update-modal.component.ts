import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { UserModule } from '../user.module';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  providers: [NgbModalConfig, NgbModal]
})
export class UpdateModalComponent {

  faEdit=faEdit;

  @Input() user: UserModule;
  @Output() editUser = new EventEmitter();

  constructor(config: NgbModalConfig, private modalService: NgbModal, private userService: UserService) {

    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content);
  }

  onUpdateUser(data) {
    const edituser = new UserModule;
    edituser.first_name = data.firstName;
    edituser.last_name = data.lastName;
    edituser.gender = data.gender;
    edituser.email = data.email;
    edituser.phone_number = data.phoneNumber;
    edituser.home_town = data.homeTown;

    this.userService.editOneUser(edituser, this.user.id).subscribe((response: UserModule) => {
      this.editUser.emit(response);
    });
    this.modalService.dismissAll();
  }
}