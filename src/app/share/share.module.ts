import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AsideComponent} from '../aside/aside.component'
import { RouterModule } from '@angular/router';
import { BookComponent } from '../book/book.component'
@NgModule({
    declarations:[AsideComponent,BookComponent],
    imports:[BrowserModule,RouterModule],
    exports:[AsideComponent,BrowserModule,RouterModule,BookComponent]
})
export class ShareModule{

}