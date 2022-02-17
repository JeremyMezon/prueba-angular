import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationCharactersComponent } from './pagination-characters.component';

describe('PaginationCharactersComponent', () => {
  let component: PaginationCharactersComponent;
  let fixture: ComponentFixture<PaginationCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
