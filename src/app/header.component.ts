import {Component} from '@angular/core'

@Component({
  selector: 'supermap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
}
)
export class SupermapHeaderComponent{
  private __SHOWMENU:boolean;
  private display:string;
  constructor(){
     this.__SHOWMENU=false;
  }
  showMenu():void{
    this.__SHOWMENU===true ?this.display='header-right':this.display='header-right header-ul'
    document.getElementById("menu").className=this.display;
    this.__SHOWMENU=!this.__SHOWMENU;
  }
}