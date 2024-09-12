import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { ImprintComponentComponent } from './imprint-component/imprint-component.component';

export const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'imprint', component: ImprintComponentComponent },
];
