import { NgModule } from '@angular/core';
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
        componentRoutes,
        ShareModule
	 ],
    entryComponents: [],
  	providers: []
})
export  class ComponentModule { }