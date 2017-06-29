import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {

  constructor() { 
    this.imagen="aguacate.jpg";
  }
  imagen:String=undefined;
  ngOnInit() {
  }

}
