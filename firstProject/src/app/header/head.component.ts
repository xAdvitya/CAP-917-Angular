import { Component } from '@angular/core';
import {HeadService} from './header.service'

@Component({
    selector: 'header',
    templateUrl: './head.component.html',
    // styleUrls
})

export class Header {
    out ;
    constructor(ser:HeadService){
        this.out = ser.console()
    }
    
    heads = ["head1", "head2", "head3"];   
}
