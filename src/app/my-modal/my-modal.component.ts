
import { Component, Output, EventEmitter, Input,AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent  implements AfterViewInit {

  info

  myForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {

    this.createForm();
  }
  ngDo
  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }
  ngAfterViewInit() {
    console.log("id", this.info)
    // this is a life cycle hook of angular to detect modification that  can help us to get data from parent component
  }
}
