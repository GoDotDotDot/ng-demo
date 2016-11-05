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
    this.__SHOWMENU===true ?this.display='none':this.display='block'
    document.getElementById("menu").style.display=this.display;
    this.__SHOWMENU=!this.__SHOWMENU;
  }
}