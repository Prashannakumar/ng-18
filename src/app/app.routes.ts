import { Routes } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [{
    path: 'rxjs', component: RxjsComponent
}, {
    path: 'form', component: FormComponent
}];
