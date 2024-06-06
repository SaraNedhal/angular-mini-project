import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    // whenever i go to /home , the home component will be displayed/rendered , i can also display module when i go to a specific path
    path: '',
    component: HomeComponent

  },

];
