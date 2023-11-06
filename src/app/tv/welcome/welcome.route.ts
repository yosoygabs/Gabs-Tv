import { Route } from "@angular/router";
import { WelcomeComponent } from "./welcome.component";

export const WELCOME_ROUTE: Route[] = [
    {
        path: 'welcome', component:WelcomeComponent
    }
]