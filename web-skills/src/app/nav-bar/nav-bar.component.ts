import { Component } from '@angular/core';

interface navElement {
  page:string,
  iconMaterial:string,
  content:string
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  navigation:navElement[] = [
    {page: "home", iconMaterial: "map", content: "Home (map view)"},
    {page: "add", iconMaterial: "add", content: "Add new trip"},
    {page: "list", iconMaterial: "list", content: "Trip list"}
  ]
}
