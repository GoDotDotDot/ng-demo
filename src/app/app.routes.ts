import { RouterModule } from '@angular/router';
import {AppComponent} from './app.component'
import {IndexComponent} from './index/index.component'

const appRoutes=[
	{
		path:'',
		component:IndexComponent
	},
	 {
		path:'css',
		loadChildren:'./css/css.module#CssModule'
	},
	{
		path:'**',
		component:IndexComponent
	}
];
export default RouterModule.forRoot(appRoutes);









// {
// 		path:'css',
// 		loadChildren:'./css/css.module#CssModule'
// 	},{
// 		path:'component',
// 		loadChildren:'./component/component.module#ComponentModule'
// 	},
//     {
//         path:'resource',
// 		loadChildren:'./resource/resource.module#ResourceModule'
//     }