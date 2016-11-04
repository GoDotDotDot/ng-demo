import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  items:any
  constructor() { 
    this.items=[
            {
                title:"开始",
                route:"../css"
            },
            {
                title:"命名规范",
                route:"conventions"
            },
            {
                title:"这里是组件",
                route:"sass"
            }
               
        ]
  }
  ngOnInit() {
    
  }

}
