import { Component, OnInit } from '@angular/core';
import {markdown} from 'markdown'
@Component({
  selector: 'app-sass',
  templateUrl: './sass.component.html',
  styleUrls: ['./sass.component.css']
})
export class SassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   console.log(markdown.toHTML( "Hello *World*!")) 
  }

}
