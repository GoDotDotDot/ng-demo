import { NgModule } from '@angular/core';
import { ShareModule} from '../share/share.module';
import  cssRoutes from './css.routes';
import { SassComponent} from './sass/sass.component'
import { CssComponent} from './css.component'
import { IndexComponent } from './index/index.component';
import { ConventionsComponent } from './conventions/conventions.component';
import { ApiComponent } from './api/api.component'
@NgModule({
	declarations: [
        CssComponent,
	    SassComponent,
	    IndexComponent,
	    ConventionsComponent,
	    ApiComponent,
     ], 	
	 imports: [
  		cssRoutes,
		ShareModule,
	 ],
    entryComponents: [],
  	providers: []
})
export  class CssModule { }