import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  routes=[
    {linkName:'Profile',url:'profile'},
    {linkName:'Contact-info',url:'contact'},
  ]

}