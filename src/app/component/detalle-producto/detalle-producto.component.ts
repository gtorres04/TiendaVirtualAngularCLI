import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id'] != null){
          console.log(params['id']); 
      }
    });
  }
  goBack(): void {
      this.location.back();
  }
}
