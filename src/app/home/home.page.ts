
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { Component, OnInit, HostListener } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  parallaxEffect: number = 0;
  secondCardVisible: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.parallaxEffect = window.scrollY * 0.2;
    const secondCard = document.querySelector('.parallax-card:nth-of-type(2)');
    if (secondCard?.classList) {
      secondCard.classList.add('visible');
      this.secondCardVisible = true;
    }
    this.changeDetectorRef.detectChanges();
  }
}