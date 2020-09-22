import { Component } from "@angular/core";
import { HeadService } from "./header.service";

@Component({
  selector: "header",
  templateUrl: "./head.component.html",
  // styleUrls
})
export class Header {
  out;

  btn = true;
  color = "grey";
  imgStyle = { width: "10px", height: "10px" };
  fontSize = "color:red;font-size:90px";
  btnClass = "btn btn-primary";
  heads = ["head1", "head2", "head3"];
  value = "input banana box"
  uppercase = "uppercase"
  arr = [1, 2, 3, 3]
  switch = "CAP918"

  constructor(ser: HeadService) {
    // let ser = new HeadService()
    this.out = ser.console();
  }

  changeColor($event) {
    console.log($event);
    this.color = "green";
  }
  text($event) {
    console.log($event.target.value)
  }
  text2(input) {
    console.log(input)
  }
}
