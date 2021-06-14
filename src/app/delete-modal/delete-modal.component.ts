import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  providers: [NgbModalConfig, NgbModal]
})
export class DeleteModalComponent {

  @Output() deleted = new EventEmitter(false);
  faTrashAlt = faTrashAlt;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private userService: UserService) {

    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content);
  }

  onDelete() {
    this.deleted.emit(true);
    this.modalService.dismissAll();
  }
}