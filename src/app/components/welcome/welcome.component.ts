import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    imports: [CommonModule, RouterModule]
})
export class WelcomeComponent {
  
  
}
