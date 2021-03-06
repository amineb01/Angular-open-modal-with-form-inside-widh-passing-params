import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from './my-modal/my-modal.component';
;
// import { EventsService } from '../service/events.service';
// import { Event } from '../models/Event';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForm';

  myinfo = { data1: "data" }
  
  constructor( private modalService: NgbModal) {
  }

  openDialog(info) {
    const modalRef = this.modalService.open(MyModalComponent, { size: 'lg' });

    modalRef.componentInstance.Mypro = info; //we pass our parameter that we need into the modal component  
    
    modalRef.result.then((result) => {
      console.log("res", result);
      // here we get the result of submited form 
    }).catch((error) => {
      console.log("error", error);
    });

  }
}
