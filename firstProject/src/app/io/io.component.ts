import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'input',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css']
})
export class IoComponent {

@Input() input:String;

}


@Component({
  selector: 'giver',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css']
})

export class IoComponentView {

}



@Component({
  selector: 'output',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css']
})

export class IoComponentOut {
  @Output() obj = new EventEmitter()
  counter=0
  valueChange(){
    this.obj.emit(this.counter)
  }
}