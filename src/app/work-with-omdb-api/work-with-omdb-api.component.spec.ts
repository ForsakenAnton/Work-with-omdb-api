import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithOmdbApiComponent } from './work-with-omdb-api.component';

describe('WorkWithOmdbApiComponent', () => {
  let component: WorkWithOmdbApiComponent;
  let fixture: ComponentFixture<WorkWithOmdbApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWithOmdbApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWithOmdbApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
