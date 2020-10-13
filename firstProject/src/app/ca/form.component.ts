import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formca',
  templateUrl: './form.component.html',
})
export class FormComponentCa {
  out = '';
  onSubmit(input: NgForm) {
    this.out = 'Registered';
  }
}
