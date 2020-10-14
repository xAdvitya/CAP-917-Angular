import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
  selector: "test-componnt",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent {
  constructor() {}
  ctrl = true;
  value="hello"
  newC = "color";
  obj = { "A": "ME", "B": "YOU", "C": "WE" };
  showVal = () =>{
    console.log(this.value)
  }
}
