import { Component, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { UserModule } from '../user.module';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})
export class UpdateModalComponent {

  @Input() user : UserModule;
  faEdit=faEdit;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private userService: UserService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content);
  }

  getSelectedUser() {
    this.userService.getUser(this.user.id);
  }
}