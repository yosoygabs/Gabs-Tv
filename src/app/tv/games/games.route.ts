import { Route } from "@angular/router";
import { GamesComponent } from "./games.component";

export const GAMES_ROUTE: Route[] = [
    {
        path: 'games', component:GamesComponent
    }
]