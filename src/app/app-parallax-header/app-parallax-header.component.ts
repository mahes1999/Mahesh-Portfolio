
import { Component, HostListener } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Import IonicModule for Ionic components
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-parallax-header',
  templateUrl: './app-parallax-header.component.html',
  styleUrls: ['./app-parallax-header.component.scss'],
  standalone: true,  // Mark as standalone component
  imports: [CommonModule, IonicModule],  // Import required modules here
})
export class AppParallaxHeaderComponent {
  translateY = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.translateY = scrollTop * 0.5;
  }
}