import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../domain/producto';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {
  @Input() producto:Producto;
  constructor() { }
  ngOnInit() {}

}
