import { Component, OnInit,Input } from '@angular/core';
import { AsideComponent } from '../aside/aside.component';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
@Input()items:any
  constructor() { }

  ngOnInit() {
  }

}
