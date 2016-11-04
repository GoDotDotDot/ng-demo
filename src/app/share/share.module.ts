import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AsideComponent} from '../aside/aside.component'
import {PanelMenuModule,MenuItem} from 'primeng/primeng';
import { RouterModule } from '@angular/router';
import { BookComponent } from '../book/book.component'
@NgModule({
    declarations:[AsideComponent,BookComponent],
    imports:[PanelMenuModule,BrowserModule,RouterModule],
    exports:[AsideComponent,PanelMenuModule,BrowserModule,RouterModule,BookComponent]
})
export class ShareModule{

}