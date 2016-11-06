import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {SupermapHeaderComponent} from './header.component'
import {ShareModule} from './share/share.module'
import {CssModule} from './css/css.module';
import {ComponentModule} from './component/component.module'
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
