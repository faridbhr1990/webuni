import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourseSectionComponent } from './search-course-section.component';

describe('SearchCourseSectionComponent', () => {
  let component: SearchCourseSectionComponent;
  let fixture: ComponentFixture<SearchCourseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCourseSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchCourseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
