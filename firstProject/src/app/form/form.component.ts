import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  changeI(model) {
    // console.log(model.valid);
    console.log(model.value);
  }
}
