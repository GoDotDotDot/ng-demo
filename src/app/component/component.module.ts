import { NgModule } from '@angular/core';
import {PanelMenuModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng'
import componentRoutes from './component.routes'
import {ShareModule} from '../share/share.module'
import {ComponentComponent} from './component.component';
import { IndexComponent } from './index/index.component'


@NgModule({
	declarations: [
        ComponentComponent,
        IndexComponent,
        
     ], 	
	 imports: [
        PanelMenuModule,
        componentRoutes,
        ShareModule
	 ],
    entryComponents: [],
  	providers: []
})
export  class ComponentModule { }