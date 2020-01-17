import { Component, OnInit } from '@angular/core';
import { planets } from '../planets-info';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  planets=planets;
  constructor() { }

  ngOnInit() {
  }

}