import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCategoriesSectionComponent } from './course-categories-section.component';

describe('CourseCategoriesSectionComponent', () => {
  let component: CourseCategoriesSectionComponent;
  let fixture: ComponentFixture<CourseCategoriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCategoriesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseCategoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
