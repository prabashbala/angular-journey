import { Component, OnInit } from '@angular/core';
import { routes } from '../routes-info';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {

 routes=routes;
  constructor() { }

  ngOnInit() {
  }

}