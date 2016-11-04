import { RouterModule } from "@angular/router";
import { CssComponent } from './css.component';
import { SassComponent } from './sass/sass.component';
import { IndexComponent } from './index/index.component'
import { ConventionsComponent } from './conventions/conventions.component'
import { ApiComponent } from './api/api.component'
const cssRoutes = [
    {
        path: 'css',
        component: CssComponent,
        children: [
           {
                path: '',
                component: IndexComponent
            },
            {
                path: 'sass',
                component: SassComponent
            },
            {
                path: 'conventions',
                component: ConventionsComponent
            },
            {
                path:'api',
                component:ApiComponent
            }
            ]
    }

];

export default RouterModule.forChild(cssRoutes);