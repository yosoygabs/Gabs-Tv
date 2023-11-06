import { Route } from '@angular/router';
import { GamesComponent } from './tv/games/games.component';
import { WelcomeComponent } from './tv/welcome/welcome.component';
import { TvComponent } from './tv/tv.component';

export const APP_ROUTE: Route[] = [
    {
        path: '',
        component: TvComponent,
        loadChildren: () => import('./tv/tv.route').then((m) => m.TV_ROUTE),
    },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', redirectTo: '/welcome' },
];