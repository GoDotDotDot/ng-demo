import { RouterModule } from "@angular/router";
import {ComponentComponent} from './component.component'
import { IndexComponent } from './index/index.component'
const componentRoutes = [
    {
        path:'component',
        component:ComponentComponent,
        children:[{
            path:'',
            component:IndexComponent
        }]
    }
      
];

export default RouterModule.forChild(componentRoutes);