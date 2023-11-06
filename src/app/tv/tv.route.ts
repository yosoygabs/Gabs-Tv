import { Route } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { GamesComponent } from "./games/games.component";
import { AboutComponent } from "./about/about.component";

export const TV_ROUTE: Route[] = [
    {path: 'welcome', component: WelcomeComponent},
    {path: 'games', component: GamesComponent},
    {path: 'about', component: AboutComponent},
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', redirectTo: '/welcome' },
];