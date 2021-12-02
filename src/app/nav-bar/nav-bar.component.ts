import { Component, OnInit } from '@angular/core';
import { NeedDataService } from '../need-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(service:NeedDataService) { 
    this.product=service.products;
  }

  ngOnInit(): void {
  }
  product:any;

}
