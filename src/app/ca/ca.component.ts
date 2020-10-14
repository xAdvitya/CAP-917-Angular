import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca',
  templateUrl: './ca.component.html',
  styleUrls: ["./ca.component.css"],
})
export class CaComponent {
  enableClr = true;
  enableHov = true;
  enableSiz = true;
  multiVar = 'colorx sizex hovx';
}
