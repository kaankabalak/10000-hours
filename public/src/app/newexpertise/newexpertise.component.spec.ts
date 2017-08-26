import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexpertiseComponent } from './newexpertise.component';

describe('NewexpertiseComponent', () => {
  let component: NewexpertiseComponent;
  let fixture: ComponentFixture<NewexpertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewexpertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewexpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
