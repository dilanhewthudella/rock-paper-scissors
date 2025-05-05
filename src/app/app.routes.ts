import { Routes } from '@angular/router';
import { CreateroomComponent } from '../components/createroom/createroom.component';
import { AppComponent } from './app.component';
import { MainmenuComponent } from '../components/mainmenu/mainmenu.component';
import { PlaygroundComponent } from '../components/plauground/plauground.component';

export const routes: Routes = [
  { path: '', redirectTo: '/mainmenu', pathMatch: 'full' }, // Default route
  { path: 'mainmenu', component: MainmenuComponent },
  { path: 'createroom', component: CreateroomComponent },
  { path: 'room/:id', component: PlaygroundComponent },
];
