import { Component } from '@angular/core';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { CoursesSectionComponent } from './components/courses-section/courses-section.component';
import { FlashcardsSectionComponent } from './components/flashcards-section/flashcards-section.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HomeSectionComponent,CoursesSectionComponent,FlashcardsSectionComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
