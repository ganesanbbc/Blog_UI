import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEntryComponent } from './entry.component';

describe('EntryComponent', () => {
  let component: TaskEntryComponent;
  let fixture: ComponentFixture<TaskEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
