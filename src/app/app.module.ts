import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {SupermapHeaderComponent} from './header.component'
import {PanelMenuModule,MenuItem} from 'primeng/primeng';
import {ShareModule} from './share/share.module'
// Import the Angular Material NgModule
import {MaterialModule} from '@angular/material'
//导入子路由
import {CssModule} from './css/css.module';
import {ComponentModule} from './component/component.module'
//导入根路由模块
import appRoutes from './app.routes';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    SupermapHeaderComponent,
    IndexComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ShareModule,
    appRoutes,  
    CssModule,
    ComponentModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
