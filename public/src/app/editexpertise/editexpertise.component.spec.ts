import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexpertiseComponent } from './editexpertise.component';

describe('EditexpertiseComponent', () => {
  let component: EditexpertiseComponent;
  let fixture: ComponentFixture<EditexpertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditexpertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditexpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
