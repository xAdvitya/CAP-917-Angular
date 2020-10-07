import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formca',
  templateUrl: './form.component.html',
})
export class FormComponentCa {
  changeI(reg) {
    console.log(reg.errors.minlength);
  }
}
