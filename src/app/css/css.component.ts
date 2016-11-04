import { Component, OnInit,HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import {AsideComponent} from '../aside/aside.component'
@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css'],
   animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class CssComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }
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
                title:"API参考",
                route:"api"
            },
            {
                title:"SASS自动化构建",
                route:"sass"
            }
               
        ]
   }

  ngOnInit() {
  }
  tanchu():void{
    console.log("测试")
  }
}
